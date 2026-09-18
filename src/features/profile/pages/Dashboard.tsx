import DashboardActivity from "../components/Dashboard/DashboardActivity"
import DashboardOverview from "../components/Dashboard/DashboardOverview"
import RecentOrders from "../components/Dashboard/RecentOrders"
import ShoppingInsights from "../components/Dashboard/ShoppingInsights"
import TopPurchases from "../components/Dashboard/TopPurchases"

interface IProps {



}

const Dashboard = ({ }: IProps) => {
  return (
    <div className="flex w-full max-w-186 flex-col gap-4">

      <DashboardOverview />
      <DashboardActivity />
      <ShoppingInsights />
      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
        <RecentOrders />
        <TopPurchases />
        
      </div>
    </div>
  )
}

export default Dashboard