import DashboardActivity from "../components/Dashboard/DashboardActivity"
import DashboardOverview from "../components/Dashboard/DashboardOverview"
import RecentOrders from "../components/Dashboard/RecentOrders"
import ShoppingInsights from "../components/Dashboard/ShoppingInsights"

interface IProps {



}

const Dashboard = ({ }: IProps) => {
  return (
    <div className="max-w-186 flex flex-col gap-4">

      <DashboardOverview />
      <DashboardActivity />
      <ShoppingInsights />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RecentOrders />
        
      </div>
    </div>
  )
}

export default Dashboard