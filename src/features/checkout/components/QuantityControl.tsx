import { Minus, Plus } from 'lucide-react';

interface Props {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: Props) {
  return (
    <div className="flex h-5 items-center overflow-hidden rounded border border-gray-200">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-full w-5 items-center justify-center text-gray-500 hover:bg-gray-100"
      >
        <Minus size={9} />
      </button>

      <span className="flex h-full min-w-5 items-center justify-center border-x border-gray-200 px-1 text-[9px] text-gray-600">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="flex h-full w-5 items-center justify-center text-gray-500 hover:bg-gray-100"
      >
        <Plus size={9} />
      </button>
    </div>
  );
}