import { Breadcrumb } from "@/components/common/Breadcrumb"
import CartProducts from "../components/cartProducts"
import CartSummary from "../components/cartSummary"
import MoreToExplore from "../components/moreToExplore";
import CartSkeleton from "../components/cartSkeleton";
import EmptyCart from "../components/emptyCart";
import useGetCart from "../hooks/useGetCarts";




const CartPage = () => {
 const {
  data: cartData,
  isLoading,
  isError,
} = useGetCart();

if (isLoading) {
  return <CartSkeleton/>;
}

if (isError) {
  return <div>Something went wrong</div>;
}

  // Products coming from API
  const products =
    cartData?.data.items.map((item) => ({
      ...item.product,
      quantity: item.quantity,
    })) ?? [];

  if (products.length === 0) {
  return <EmptyCart />;
}  
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-6 lg:py-10 ">

        <Breadcrumb
          items={[{ label: "Home", path: "/" }
            , { label: "Cart" }]}

        />

        {/* prodcuts cart */}
        <CartProducts products={products}
          // setProducts={setProductsDummy}
        />

        {/* product sumamry */}
        <CartSummary products={products} />
        {/* More to explore */}
        <MoreToExplore />


      </div>
    </div>
  )
}

export default CartPage