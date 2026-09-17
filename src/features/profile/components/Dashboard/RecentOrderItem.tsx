interface IProps {

orderNumber: string;
  date: string;
  itemsCount: number;
  status: string;
  price: number;

}

const RecentOrderItem=({orderNumber,date,itemsCount,status,price}:IProps)=> {
  return (
      <div className="mt-3 max-w-72.5 w-full flex items-center justify-between  gap-2 border-b border-[#D1D5DC] py-4 last:border-b-0">
        {/* order num & date, items */}
        <div className="flex items-start justify-between flex-col gap-2">
            
              <p className="text-[#014162] text-[16px] leading-[120%] ">{orderNumber}</p>
              <p className="text-[#0A0A0A] text-[16px] leading-[120%]">{date}</p>
              <p className="text-[#4A5565] text-[12px] leading-[150%]">{itemsCount} items</p>
            
        </div>
       {/* status & price */}
        <div className="flex flex-col items-start justify-between gap-2">
             
          <p className="text-[#232832] text-[12px] leading-[150%] bg-[#D1D5DC] py-1 px-2 rounded-lg  ">{status}</p>
            <p className="text-[#232832] text-[16px] leading-6">£{price.toFixed(2)}</p>
        </div>
     </div>
  )
}

export default RecentOrderItem