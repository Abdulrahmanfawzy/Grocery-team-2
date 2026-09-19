interface PaymentHistoryCardProps {
    orderNumber: string;
    date: string;
    amount: string;
    isRefund?: boolean;
    status?: string;
}

const PaymentHistoryCard = ({ orderNumber, date, amount, isRefund = false, status = "Completed", }: PaymentHistoryCardProps) => {
    return (
        <div className="max-w-140 flex items-center justify-between rounded-[8px] border-[0.8px] border-[#DAD8D8] p-6">
            {/* Order details */}
            <div className="flex flex-col gap-1 px-2">
                 <p className="text-[16px] font-normal leading-[120%] text-[#0A0A0A] font-inter">

                {isRefund ? "Refund " : ""} {orderNumber} </p>
                 <p className="text-[16px] font-normal leading-[120%] text-[#4A5565] font-inter">
                    {date} 
                 </p>
             </div>
            {/* Amount & status */}
            <div className="flex flex-col gap-1 px-2">
                <p className={`text-[16px] font-normal leading-[120%] font-inter ${isRefund ? "text-[#42824D]" : "text-app-black"}`} >
                    {isRefund ? "+" : ""} {amount} 
                    </p>
                 <div className="w-fit rounded-lg bg-[#42824D33] p-1">
                    <p className="text-[12px] font-normal leading-[150%] text-[#42824D] font-inter">
                        {status}
                     </p>
                </div>
            </div>
        </div>);
};
export default PaymentHistoryCard;