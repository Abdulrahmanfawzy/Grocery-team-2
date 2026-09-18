import { Button } from "@/components"
import RecentOrderItem from "./RecentOrderItem";

const RecentOrders = () => {
    const ordersDummy = [
        {
            id: 1,
            orderNumber: "#GP001",
            date: "Nov 24, 2025",
            itemsCount: 8,
            status: "Delivered",
            price: 45.32,
        },
        {
            id: 2,
            orderNumber: "#GP002",
            date: "Nov 20, 2025",
            itemsCount: 5,
            status: "Delivered",
            price: 32.5,
        },
        {
            id: 3,
            orderNumber: "#GP003",
            date: "Nov 18, 2025",
            itemsCount: 3,
            status: "Pending",
            price: 21.75,
        },
    ];
    return (
        <div className="rounded-[8px] border border-[#D1D5DC] p-4 sm:p-6">
            {/* heading */}

            <div className="flex items-center justify-between border-b border-b-[#D1D5DC] pb-4 ">
                <p className="text-[#0A0A0A] text-[16px] leading-[120%]  ">Recent Orders</p>
                <Button size="sm">View all</Button>
            </div>
            {/* orders */}
            {ordersDummy.map((order) => {
                return <RecentOrderItem
                    key={order.id}
                    orderNumber={order.orderNumber}
                    date={order.date}
                    itemsCount={order.itemsCount}
                    status={order.status}
                    price={order.price}
                />
            })}


        </div>
    )
}

export default RecentOrders