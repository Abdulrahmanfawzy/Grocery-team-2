import WelcomeCard from "./WelcomeCard"
import orderIcon from "../../../../assets/orderIcon.svg"
import pointStar from "../../../../assets/pointStar.svg"
import dollarIcon from "../../../../assets/dollar.svg"
import type { DashboardData } from "../../types/dashboard.types"

interface IProps {
  data?: DashboardData;
}

const DashboardOverview = ({ data }: IProps) => {
  return (
    <div className="w-full rounded-[8px] border-[0.8px] bg-app-main p-4 shadow-[-1px_0px_4px_0px_#01416240] sm:p-6 md:p-8">
      <h2 className="text-[20px] font-medium leading-[150%] text-[#F7FCFF] sm:text-[24px]">Welcome back!</h2>
      <p className="text-[14px] leading-[120%] text-[#F7FCFF] sm:text-[16px]">Here's what's happening with your grocery shopping</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <WelcomeCard icon={orderIcon} title="Track Orders" value={`${data?.track_order ?? 0} Active`} />
        <WelcomeCard icon={pointStar} title="Loyalty Points" value={`${data?.loyalty_points.points ?? 0} pts`} />
        <WelcomeCard icon={dollarIcon} title="Total Savings" value={`£${data?.total_saving ?? 0}`} />
      </div>
    </div>
  )
}

export default DashboardOverview
