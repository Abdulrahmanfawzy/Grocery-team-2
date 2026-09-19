import { Button } from "@/components"
import dollarIcon from "../../../assets/dollar.svg"
import OtherPaymentMethods from "../components/Payment/OtherPaymentMethods"
import PaymentHistory from "../components/Payment/PaymentHistory"
import SavedCards from "../components/Payment/SavedCards"
interface IProps {



}

const Payment = ({ }: IProps) => {
  return (
    <>
      <section className="flex w-full max-w-186 flex-col gap-10 font-inter">
        {/* header */}
        <div className="flex min-w-0 flex-col gap-2 sm:gap-3">
          <h2 className="text-lg font-medium leading-[150%] text-[#000000] sm:text-[20px]">Payment & Wallet</h2>
          <p className="text-sm font-normal leading-[140%] text-[#4A5565] sm:text-base">Manage your payment methods and view transaction history</p>
        </div>



        {/* store crdits */}
        <div className="w-full">
          <div className="flex min-w-0 flex-col gap-3 rounded-2xl border-[0.8px] border-app-main bg-app-main p-5 shadow-[-1px_0px_4px_0px_#01416240] sm:gap-2 sm:p-8">
            <h2 className="text-lg font-medium leading-[150%] text-[#F7FCFF] sm:text-[20px]">Store Credit</h2>
            {/* amount */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium leading-[150%] text-[#F7FCFF] sm:text-[20px]">£12.50</h2>
              <div className="shrink-0 rounded-full border bg-white p-1">
                <img className="h-5 w-5 sm:h-6 sm:w-6" src={dollarIcon}
                  style={{ filter: "brightness(0) saturate(100%) invert(20%) sepia(21%) saturate(1848%) hue-rotate(160deg) brightness(88%) contrast(101%)" }}

                />
              </div>

            </div>
            <p className="max-w-full text-sm leading-[140%] text-[#F7FCFF] sm:text-base">Available for your next purchase • Expires: Dec 31, 2025</p>

          </div>
        </div>

        {/* payment methods */}
        <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <SavedCards />

            <OtherPaymentMethods />
          </div>
        </div>
        {/* payment history */}
        <PaymentHistory />

        {/* receipt & invoice */}
        <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-4 sm:p-5">
          {/* header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] text-[black] font-medium leading-[150%] font-inter">Receipt & Invoice</h2>
            <p className="text-[18px] text-[#4A5565]  leading-[120%] font-inter">Download PDF receipts for your orders</p>
          </div>
          <Button size="md" className="max-w-62.5 cursor-pointer mt-4 font-inter" >
            Download All Recipts
          </Button>
        </div>



      </section>


    </>


  )
}

export default Payment