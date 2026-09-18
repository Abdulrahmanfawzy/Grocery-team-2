import { Trash2 } from 'lucide-react';
import { QuantityControl } from './QuantityControl';
import type { CartItemType } from '../types/checkout';

interface Props {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  return (
    <div className="flex gap-2 border-b border-gray-100 py-3 last:border-b-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-50">
        <img
          src={item.image}
          alt={item.name}
          className="h-10 w-10 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[10px] font-semibold text-gray-700">
          {item.name}
        </h3>

        <p className="text-[9px] text-gray-400">{item.description}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="rounded bg-[#F2F3F8] px-1.5 py-0.5 text-[8px] text-gray-500">
            {item.unit}
          </span>

          <QuantityControl
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />

          <button
            type="button"
            onClick={onRemove}
            className="text-gray-300 hover:text-red-500"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 size={11} />
          </button>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[10px] font-semibold text-gray-700">
          € {item.price * item.quantity}
        </p>
      </div>
    </div>
  );
}