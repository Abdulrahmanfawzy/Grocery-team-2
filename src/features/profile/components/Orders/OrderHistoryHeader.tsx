interface IProps {



}

const OrderHistoryHeader=({}:IProps)=> {
  return (
    <div>

   <header className="flex flex-col gap-4">
      <h2 className="text-[20px] font-medium leading-[150%] text-[#000000] ">Order History</h2>

      <p className="text-[18px] font-medium leading-[120%] text-[#4A5565] ">
        View and manage all your past orders
      </p>
    </header>

    </div>
  )
}

export default OrderHistoryHeader