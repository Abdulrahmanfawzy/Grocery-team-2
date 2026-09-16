

import trashIcon from "../../assets/remove.svg"
import addIcon from "../../assets/plus.svg"
import { Minus, Trash2 } from "lucide-react";
interface QuantityControlProps {
  quantity: number;
  name: string;
  onDecrease: () => void;
  onIncrease: () => void;
}

const QuantityControl = ({
  quantity,
  name,
  onDecrease,
  onIncrease,
}: QuantityControlProps) => {
  return (
    <div className="flex shrink-0 items-center justify-between gap-2 rounded-[10px] border border-app-silver p-2 sm:gap-4">
      <button
        type="button"
        aria-label={`Decrease quantity of ${name}`}
        onClick={onDecrease}
        className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered cursor-pointer"
      >
        {quantity === 1 ?  <img src={trashIcon} alt="" className="h-4 w-3.5" /> : <Minus className="h-4 w-3.5 text-app-main " />}
      </button>

      <span className="px-2 text-[16px] font-regular leading-[120%] text-app-black sm:px-4 sm:text-[18px]">
        {quantity}
      </span>

      <button
        type="button"
        aria-label={`Increase quantity of ${name}`}
        onClick={onIncrease}
        className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered cursor-pointer"
      >
        <img src={addIcon} alt="" className="h-4 w-3.5" />
      </button>
    </div>
  );
};

export default QuantityControl;