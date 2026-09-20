import { Button } from "@/components";
import type { Order } from "../../types/orders.types";
import reorderIcon from "../../../../assets/re-order.svg"
import { ReceiptText, Star } from "lucide-react";

interface OrderActionsProps{
    order:Order;
}
const OrderActions = ({ order }: OrderActionsProps) => {
  return (
    <div className="flex items-center justify-between gap-2 mt-7">
      <h2 className="text-[20px] text-app-main leading-[150%] font-medium ">£{order.total}.</h2>

      <div className="flex items-center justify-between gap-4">
        <Button variant="secondary" className="text-app-main! hover:text-[white]!">
          <ReceiptText className="pr-2"/>
          Download Receipt
        </Button>

        <Button variant="secondary" className="text-app-main! hover:text-[white]!">
          <Star className="pr-2" />
          Rate
        </Button>

        <Button>
          <img src={reorderIcon} className="pr-2" />
          Reorder
        </Button>
      </div>
    </div>
  );
};
export default OrderActions;