import { Breadcrumb } from "@/components/common/Breadcrumb"
import CartProducts from "../components/cartProducts"
import CartSummary from "../components/cartSummary"
import { useState } from "react";
import sasuImage from "../../../assets/sagu.svg"
import eggImage from "../../../assets/Eggs.svg"

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
}

const CartPage = ({ }: Product) => {
     const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Organic Orange - 1KG",
      price: 20,
      quantity: 1,
      image: sasuImage,
      inStock: true,
    },
    {
      id: 2,
      name: "Free Range Eggs - 12 Pieces",
      price: 15,
      quantity: 2,
      image: eggImage,
      inStock: true,
    },
    {
      id: 3,
      name: "Fresh Organic Milk - 1L",
      price: 18,
      quantity: 1,
      image: eggImage,
      inStock: true,
    },
    {
      id: 4,
      name: "Organic Banana - 1KG",
      price: 12,
      quantity: 3,
      image: sasuImage,
      inStock: true,
    },
    {
      id: 5,
      name: "Fresh Farm Eggs - 6 Pieces",
      price: 10,
      quantity: 1,
      image: sasuImage,
      inStock: false,
    },
    {
      id: 6,
      name: "Premium Fresh Orange - 2KG",
      price: 30,
      quantity: 2,
      image: eggImage,
      inStock: true,
    },
    {
      id: 7,
      name: "Organic Spinach - 200G",
      price: 8,
      quantity: 1,
      image: eggImage,
      inStock: true,
    },
    {
      id: 8,
      name: "Fresh Organic Carrots - 500G",
      price: 6,
      quantity: 2,
      image: sasuImage,
      inStock: true,
    }
  ]);
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
                <CartSummary  products={products}/>


            </div>
        </div>
    )
}

export default CartPage