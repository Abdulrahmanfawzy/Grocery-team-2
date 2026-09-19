interface IProps {



}

const OrderHistoryHeader=({}:IProps)=> {
  return (
    <div>

  <header className="flex min-w-0 flex-col gap-2 sm:gap-4">
    <h2 className="text-lg font-medium leading-[150%] text-[#000000] sm:text-[20px]">Order History</h2>

    <p className="text-sm font-medium leading-[140%] text-[#4A5565] sm:text-lg sm:leading-[120%]">
        View and manage all your past orders
      </p>
    </header>

    </div>
  )
}

export default OrderHistoryHeader