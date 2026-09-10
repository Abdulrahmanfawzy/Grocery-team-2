

import type { Product } from "../types/product.types";
import ProductCard from "./productCard";
import { ScrollArea } from "@/components/ui/scroll-area";
interface CartProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const CartProducts = ({ products, setProducts }: CartProductsProps) => {
 

  const increaseQuantity = (productId: number) => {
    setProducts((currentProducts) => currentProducts.map((product) => (
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )));
  };

  const decreaseQuantity = (productId: number) => {
    setProducts((currentProducts) => currentProducts.flatMap((product) => {
      if (product.id !== productId) {
        return [product];
      }

      return product.quantity > 1
        ? [{ ...product, quantity: product.quantity - 1 }]
        : [];
    }));
  };

  return (
    <div className="w-full">
      <h4 className="text-[20px] font-medium text-app-black mt-6">Products In Cart</h4>

      <div className="mt-4 w-full rounded-md border border-gray-200 bg-white">
         <ScrollArea className="h-[300px] w-full sm:h-[420px]">
        <div className="my-3 grid grid-cols-1 sm:grid-cols-2">
          {/* Product */}

          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.image}
              inStock={product.inStock}
              showColumnDivider={index % 2 === 0}
              removeBottomBorder={index >= products.length - 2}
              onIncrease={() => increaseQuantity(product.id)}
              onDecrease={() => decreaseQuantity(product.id)}
            />
          ))}
        

        </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CartProducts;