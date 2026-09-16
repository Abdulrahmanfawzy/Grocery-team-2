


import useAddCartItem from "../hooks/useAddCartItem";
import type { CartProduct, Product } from "../types/cart.types";
import ProductCard from "./productCard";
import { ScrollArea } from "@/components/ui/scroll-area";
interface CartProductsProps {
  products: CartProduct[];

}
const CartProducts = ({ products }: CartProductsProps) => {
   const {mutate,isPending,isError} = useAddCartItem();

  const increaseQuantity = (productId: number) => {
   mutate({
    productId,
    quantity:1
   })
  };



  return (
    <div className="w-full">
      <h4 className="text-[20px] font-medium text-app-black mt-6">Products In Cart</h4>

      <div className="mt-4 w-full rounded-md border border-gray-200 bg-white ">
         <ScrollArea className="h-37.5 w-full sm:h-75">
        <div className=" my-3 grid grid-cols-1 sm:grid-cols-2">
          {/* Product */}

          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              cartItemId={product.cartItemId}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.image}
              // inStock={product.inStock}
              showColumnDivider={index % 2 === 0}
              removeBottomBorder={index >= products.length - 2}
              onIncrease={() => increaseQuantity(product.id)}
              // onDecrease={() => {}}
            />
          ))}
        

        </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CartProducts;