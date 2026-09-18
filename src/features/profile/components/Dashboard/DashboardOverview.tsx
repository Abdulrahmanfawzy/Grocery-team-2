import WelcomeCard from "./WelcomeCard"
import orderIcon from "../../../../assets/orderIcon.svg"
import pointStar from "../../../../assets/pointStar.svg"
import dollarIcon from "../../../../assets/dollar.svg"



const DashboardOverview=()=> {
  
  return (
    <div className="w-full max-w-186 rounded-[8px] border-[0.8px] bg-app-main p-4 shadow-[-1px_0px_4px_0px_#01416240] sm:p-6 md:p-8">
      <h2 className="text-[20px] font-medium leading-[150%] text-[#F7FCFF] sm:text-[24px]">Welcome back, Sarah!</h2>
      <p className="text-[14px] leading-[120%] text-[#F7FCFF] sm:text-[16px]">Here's what's happening with your grocery shopping</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <WelcomeCard icon={orderIcon} title="Track Orders"  value="3 Active"   />
            <WelcomeCard icon={pointStar} title="Loyalty Points"  value="2,450 pts" />
            <WelcomeCard icon={dollarIcon} title="Store Credit"  value="£12.50" />
        </div>
    </div>
  )
}

export default DashboardOverview