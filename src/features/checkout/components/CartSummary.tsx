import type { CartItemType } from '../types/checkout';
import { CartItem } from './CartItem';

interface Props {
  items: CartItemType[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export function CartSummary({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <section className="flex h-fit max-h-[540px] flex-col overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-3 py-3">
        <h2 className="text-[11px] font-bold text-gray-700">Cart Summary</h2>
        <span className="text-[9px] text-gray-400">
          {items.length} items
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>

      <div className="border-t border-gray-100 px-3 py-3">
        <h3 className="mb-2 text-[10px] font-bold text-[#005174]">
          Total Amount
        </h3>

        <div className="space-y-1 text-[9px]">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>€ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Shipping</span>
            <span>€ {shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pt-1 font-bold text-gray-700">
            <span>Total</span>
            <span>€ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}