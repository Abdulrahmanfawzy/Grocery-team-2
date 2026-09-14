import { Breadcrumb } from "@/components/common/Breadcrumb"
import CartProducts from "../components/cartProducts"
import CartSummary from "../components/cartSummary"
import { useState } from "react";
import sasuImage from "../../../assets/sagu.svg"
import eggImage from "../../../assets/Eggs.svg"
import MoreToExplore from "../components/moreToExplore";
import { cartProducts } from "../data/products";




const CartPage = () => {
  const [products, setProducts] = useState(cartProducts);
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-6 lg:py-10 ">

        <Breadcrumb
          items={[{ label: "Home", path: "/" }
            , { label: "Cart" }]}

        />

        {/* prodcuts cart */}
        <CartProducts
          products={products}
          setProducts={setProducts}
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