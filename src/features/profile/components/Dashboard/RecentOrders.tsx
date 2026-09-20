import { Button } from "@/components"
import RecentOrderItem from "./RecentOrderItem";
import type { RecentOrder } from "../../types/dashboard.types";

interface IProps {
  orders?: RecentOrder[];
}

const RecentOrders = ({ orders = [] }: IProps) => {
    return (
        <div className="rounded-[8px] border border-[#D1D5DC] p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-b-[#D1D5DC] pb-4 ">
                <p className="text-[#0A0A0A] text-[16px] leading-[120%]  ">Recent Orders</p>
                <Button size="sm">View all</Button>
            </div>
            {orders.length === 0 ? (
                <p className="mt-4 text-center text-[14px] text-[#4A5565]">No recent orders</p>
            ) : (
                orders.map((order) => (
                    <RecentOrderItem
                        key={order.id}
                        orderNumber={`#${order.id}`}
                        date={order.delivery_time ?? "Pending"}
                        itemsCount={order.items_count}
                        status={order.status}
                        price={order.total}
                    />
                ))
            )}
        </div>
    )
}

export default RecentOrders
