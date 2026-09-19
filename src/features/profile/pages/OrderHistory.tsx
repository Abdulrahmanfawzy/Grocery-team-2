import OrderFilters from "../components/Orders/OrderFilters"
import OrderHistoryHeader from "../components/Orders/OrderHistoryHeader"

interface IProps {



}

const OrderHistory=({}:IProps)=> {
  return (
  
    <main className="font-inter w-full max-w-170">
      <OrderHistoryHeader />
      <OrderFilters />
    </main>
  )
}

export default OrderHistory