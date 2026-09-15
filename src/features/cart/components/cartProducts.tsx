


import useAddCartItem from "../hooks/useAddCartItem";
import type { Product } from "../types/cart.types";
import ProductCard from "./productCard";
import { ScrollArea } from "@/components/ui/scroll-area";
interface CartProductsProps {
  products: Product[];

}
const CartProducts = ({ products }: CartProductsProps) => {
   const {mutate,isPending} = useAddCartItem();

  const increaseQuantity = (productId: number) => {
   mutate({
    productId,
    quantity:1
   })
  };

  const decreaseQuantity = (productId: number) => {
    // setProducts((currentProducts) => currentProducts.flatMap((product) => {
    //   if (product.id !== productId) {
    //     return [product];
    //   }

    //   return product.quantity > 1
    //     ? [{ ...product, quantity: product.quantity - 1 }]
    //     : [];
    // }));
  };
  const deEcreaseQuantity = (productId: number) => {
  // setProducts((currentProducts) =>
  //   currentProducts
  //     .filter((product) => {
  //       return product.id !== productId || product.quantity > 1;
  //     })
  //     .map((product) => {
  //       return product.id === productId
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product;
  //     })
  // );
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
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.image}
              // inStock={product.inStock}
              showColumnDivider={index % 2 === 0}
              removeBottomBorder={index >= products.length - 2}
              onIncrease={() => increaseQuantity(product.id)}
              onDecrease={() => {}}
            />
          ))}
        

        </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CartProducts;