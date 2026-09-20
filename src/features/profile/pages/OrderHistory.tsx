import OrderCard from "../components/Orders/OrderCard"
import OrderFilters from "../components/Orders/OrderFilters"
import OrderHistoryHeader from "../components/Orders/OrderHistoryHeader"
import { orders } from "../data/ordersData"

interface IProps {



}

const OrderHistory=({}:IProps)=> {
  return (
  
    <main className="w-full max-w-170 px-3 font-inter sm:px-5 lg:px-0">
      <OrderHistoryHeader />
      <OrderFilters />
      
      <section className="mt-6 space-y-4 sm:mt-8">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))}
      </section>
    </main>
  )
}

export default OrderHistory