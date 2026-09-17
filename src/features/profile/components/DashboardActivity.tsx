import { Button } from "@/components"
import { ShoppingCart} from 'lucide-react'
import ActivityCard from "./ActivityCard";

interface IProps {



}

const DashboardActivity=({}:IProps)=> {
  const activities = [
    {
      icon: ShoppingCart,
      title: "Current Cart",
      primaryText: "5 items in cart",
      secondaryText: "Last updated: 2 hours ago",
      value: "£28.45",
      topButtonText: "View Cart",
      bottomButtonText: "Continue Shopping",
    }
    , {
      icon: ShoppingCart,
      title: "Upcomming Delivery",
      primaryText: "Tomorrow, Nov 28",
      secondaryText: "10:00 AM - 12:00 PM",
      value: "Order #GP20251126001",
      stackValue: true,
      topButtonText: "track",
      bottomButtonText: "View Details",
    },];

  return (
    <div className="mt-4 max-w-186 flex items-center justify-between gap-2 ">
       

      {activities.map((activity, index) => ( <ActivityCard key={index} {...activity} /> ))}



    </div>
  )
}

export default DashboardActivity