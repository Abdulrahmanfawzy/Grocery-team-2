import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ActivityCard from "./ActivityCard";
import type { DashboardData } from "../../types/dashboard.types";

interface IProps {
  data?: DashboardData;
}

const DashboardActivity = ({ data }: IProps) => {
  const navigate = useNavigate();
  const deliveryDate = data?.delivery_time.date;
  const deliveryTime = data?.delivery_time.time;

  const activities = [
    {
      icon: ShoppingCart,
      title: "Current Cart",
      primaryText: `${data?.track_order ?? 0} orders to track`,
      secondaryText: "Active orders",
      value: `£${data?.average_order_total?.toFixed(2) ?? '0.00'}`,
      topButtonText: "View Cart",
      bottomButtonText: "Continue Shopping",
      onAction: () => navigate('/'),
    },
    {
      icon: ShoppingCart,
      title: "Upcoming Delivery",
      primaryText: deliveryDate ?? "No delivery scheduled",
      secondaryText: deliveryTime ?? "",
      value: data?.last_order ? `Last: £${data.last_order.total}` : "No orders yet",
      stackValue: true,
      topButtonText: "Track",
      bottomButtonText: "View Details",
    },
  ];

  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12">
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
    </div>
  )
}

export default DashboardActivity
