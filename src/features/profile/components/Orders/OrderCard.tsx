import type { Order } from "../../types/orders.types";
import OrderActions from "./OrderActions";
import OrderItemPreview from "./OrderItemPreview";
interface OrderCardProps{
    order:Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <article className="flex flex-col gap-2 rounded-[8px] border-[0.8px] border-[#DAD8D8] p-6">

      {/* Header */}
      <div className="flex items-center justify-between rounded-lg border-[0.8px] border-[#DAD8D8] p-4">
        <div className="flex flex-col items-start px-2 gap-1">
          <p className="text-[12px] text-[#0A0A0A] leading-[150%]">Order #{order.id}</p>

          <p className="text-[12px] text-[#888888] leading-[150%] ">{order.date} <span>{order.itemsCount} Items</span></p>

          
        </div>

        <span className="bg-[#42824D33] p-1.5 border-[#42824D33] rounded-lg text-[#42824D] text-[12px] leading-[150%] ">
          {order.status}
        </span>
      </div>

      {/* Products */}
      <div className="flex w-full flex-wrap gap-3">
        {order.items.map((item) => (
          <OrderItemPreview
            key={item.id}
            {...item}
          />
        ))}

        {order.itemsCount > order.items.length && (
          <div className="flex min-h-12 flex-1 items-center justify-center rounded-lg border-[#F7FCFF] bg-[#F7FCFF] p-2 text-[12px] leading-[150%] text-app-black">
            +{order.itemsCount - order.items.length} More
          </div>
        )}
      </div>

      {/* Actions */}
      <OrderActions order={order} />

    </article>
  );
};
export default OrderCard;