import DashboardActivity from "../components/DashboardActivity"
import DashboardOverview from "../components/DashboardOverview"
import ShoppingInsights from "../components/ShoppingInsights"

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