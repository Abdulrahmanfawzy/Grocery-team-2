

import trashIcon from "../../assets/remove.svg"
import addIcon from "../../assets/plus.svg"
import { Loader2, Minus } from "lucide-react";
import useUpdateCartItem from "@/features/cart/hooks/useUpdateCartItem";
import useDeleteCartItem from "@/features/cart/hooks/useDeleteCartItem";
interface QuantityControlProps {
  cartItemId: number;
  quantity: number;
  name: string;
}

const QuantityControl = ({
  cartItemId,
  quantity,
  name,

}: QuantityControlProps) => {
  const { mutate, isPending } = useUpdateCartItem();
  const { mutate: deleteItem } = useDeleteCartItem();


const DecreaseQuantityOrRemoveItem = () => {
  if (quantity === 1) {
    deleteItem({cartItemId});
    return;
  }

  mutate({
    cartItemId,
    quantity: quantity - 1,
  });
};
const IncreaseQuantity = () => {

  mutate({
    cartItemId,
    quantity: quantity + 1,
  });

};
return (
  <div className="flex shrink-0 items-center justify-between gap-2 rounded-[10px] border border-app-silver p-2 sm:gap-4">
    <button
      type="button"
      aria-label={`Decrease quantity of ${name}`}
      onClick={() => DecreaseQuantityOrRemoveItem()}
      className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered cursor-pointer"
    >
      {quantity === 1 ? <img src={trashIcon} alt="" className="h-4 w-3.5" /> : <Minus className="h-4 w-3.5 text-app-main " />}
    </button>

    <span className="px-2 text-[16px] font-regular leading-[120%] text-app-black sm:px-4 sm:text-[18px]">
      {isPending ? (<Loader2 className="mx-auto h-4 w-4 text-app-main animate-spin" />) : (quantity)}
    </span>

    <button
      type="button"
      aria-label={`Increase quantity of ${name}`}
      onClick={() => IncreaseQuantity()}
      className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered cursor-pointer"
    >
      <img src={addIcon} alt="" className="h-4 w-3.5" />
    </button>
  </div>
);
};

export default QuantityControl;