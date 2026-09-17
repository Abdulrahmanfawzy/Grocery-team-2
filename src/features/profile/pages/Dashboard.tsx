import DashboardActivity from "../components/DashboardActivity"
import DashboardOverview from "../components/DashboardOverview"
// import ShoppingInsights from "../components/ShoppingInsights"

interface IProps {



}

const Dashboard=({}:IProps)=> {
  return (
    <div>

  <DashboardOverview/>
  <DashboardActivity/>
  {/* <ShoppingInsights /> */}
    </div>
  )
}

export default Dashboard