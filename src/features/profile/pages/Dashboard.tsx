import DashboardActivity from "../components/Dashboard/DashboardActivity"
import DashboardOverview from "../components/Dashboard/DashboardOverview"
import ShoppingInsights from "../components/Dashboard/ShoppingInsights"

interface IProps {



}

const Dashboard = ({ }: IProps) => {
  return (
    <div className="max-w-186 flex flex-col gap-4">

      <DashboardOverview />
      <DashboardActivity />
      <ShoppingInsights />
       
    </div>
  )
}

export default Dashboard