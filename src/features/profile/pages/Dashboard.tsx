import useDashboard from "../hooks/useDashboard"
import { ErrorState } from "@/components/common/ErrorState"
import DashboardActivity from "../components/Dashboard/DashboardActivity"
import DashboardOverview from "../components/Dashboard/DashboardOverview"
import RecentOrders from "../components/Dashboard/RecentOrders"
import ShoppingInsights from "../components/Dashboard/ShoppingInsights"
import TopPurchases from "../components/Dashboard/TopPurchases"
import CartSkeleton from "@/features/cart/components/cartSkeleton"

const Dashboard = () => {
  const { data: response, isLoading, isError, error } = useDashboard();

  if (isLoading) {
    return <CartSkeleton />;
  }

  if (isError) {
    return <ErrorState description={error.message} />;
  }

  const dashboard = response?.data;

  return (
    <div className="flex w-full flex-col gap-4">
      <DashboardOverview data={dashboard} />
      <DashboardActivity data={dashboard} />
      <ShoppingInsights data={dashboard} />
      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
        <RecentOrders orders={dashboard?.recent_orders} />
        <TopPurchases purchases={dashboard?.top_purchases} />
      </div>
    </div>
  )
}

export default Dashboard
