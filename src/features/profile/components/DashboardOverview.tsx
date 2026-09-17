import WelcomeCard from "./WelcomeCard"
import orderIcon from "../../../assets/orderIcon.svg"
import pointStar from "../../../assets/pointStar.svg"
import dollarIcon from "../../../assets/dollar.svg"

interface IProps {



}

const DashboardOverview=({}:IProps)=> {
  return (
    <div className="bg-app-main w-full max-w-186 border-[0.8px] rounded-[8px] p-8 shadow-[-1px_0px_4px_0px_#01416240] gap-2 ">
        <h2 className="font-medium text-[#F7FCFF] text-[24px] leading-[150%] ">Welcome back, Sarah! </h2>
        <p className="text-[16px] leading-[120%] text-[#F7FCFF] text-normal ">Here's what's happening with your grocery shopping</p>
        <div className="flex items-center justify-between mt-4">
            <WelcomeCard icon={orderIcon} title="Track Orders"  value="3 Active"   />
            <WelcomeCard icon={pointStar} title="Loyalty Points"  value="2,450 pts" />
            <WelcomeCard icon={dollarIcon} title="Store Credit"  value="£12.50" />
        </div>
    </div>
  )
}

export default DashboardOverview