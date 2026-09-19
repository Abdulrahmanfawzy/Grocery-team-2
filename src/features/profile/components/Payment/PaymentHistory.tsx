import { Button } from "@/components";
import payments from "../../data/paymentData";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { ChevronRight } from "lucide-react";


interface IProps {

}

const PaymentHistory = ({ }: IProps) => {

    return (
        <section className="flex flex-col gap-6 border-[0.8px] border-[#DAD8D8] rounded-[8px] p-6  ">
            {/* heading */}
            <h2 className="text-[20px] font-medium leading-[150%] text-app-black ">Payment History</h2>
           
            {/* orders */}
            <div className="flex flex-col gap-4"> {
                payments.map((payment, index) => (
                    <PaymentHistoryCard key={index}
                        orderNumber={payment.orderNumber}
                        date={payment.date}
                        amount={payment.amount}
                        isRefund={payment.isRefund}
                        status={payment.status} />))}
            </div>
            <Button size="md" className="max-w-62.5 cursor-pointer" >
                View All Transactions
                <ChevronRight />
                </Button>



        </section>
    )
}

export default PaymentHistory