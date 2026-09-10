
import sasuImage from "../../../assets/sagu.svg"
import eggImage from "../../../assets/Eggs.svg"
import ProductCard from "./productCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
const CartProducts = () => {
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

      <div className="h-87 w-full rounded-md border border-gray-200 bg-white mt-4">
         <ScrollArea className="h-full w-full">
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