import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Product } from "@/features/products/types/product.types";
import useAddCartItem from "@/features/cart/hooks/useAddCartItem";

interface ExploreCarouselProps {
  products: Product[];
}

export default function ExploreCarousel({ products }: ExploreCarouselProps) {
  const [carouselQuantities, setCarouselQuantities] = useState<
    Record<string | number, number>
  >({});

  const { mutate: addProductToCart, isPending } = useAddCartItem();

  const handleCarouselQtyChange = (id: string | number, delta: number) => {
    setCarouselQuantities((prev) => {
      const currentQty = prev[id] || 1;
      const newQty = Math.max(1, currentQty + delta);

      return {
        ...prev,
        [id]: newQty,
      };
    });
  };

  const handleAddToCart = (item: Product) => {
    const currentQty = carouselQuantities[item.id] || 1;

    addProductToCart({
      productId: Number(item.id),
      quantity: currentQty,
    });
  };

  return (
    <div className="mt-10 mb-12 sm:mt-16 sm:mb-20">
      <h2 className="mb-4 text-base font-bold text-gray-900 sm:mb-6 sm:text-lg md:text-xl">
        More To Explore
      </h2>

      <Carousel className="relative w-full px-2 sm:px-10 md:px-12">
        <CarouselContent className="-ml-3 sm:-ml-4">
          {products?.map((item: Product) => {
            const currentQty = carouselQuantities[item.id] || 1;

            return (
              <CarouselItem
                key={item.id}
                className="basis-full pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                  <div>
                    {/* تغليف الصورة والعنوان برابط الانتقال */}
                    <Link to={`/productdetails/${item.id}`} className="block">
                      {item.images?.[0] && (
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="mb-3 h-40 w-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
                        />
                      )}

                      <h3 className="line-clamp-1 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>

                    <p className="mt-1 text-sm font-bold text-primary">
                      £ {item.price}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    {/* Add to Cart Button */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      disabled={isPending}
                      className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#014162] py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#003852] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add To Cart
                    </button>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 rounded-xl border border-gray-300 px-4 py-2">
                      <button
                        type="button"
                        onClick={() => handleCarouselQtyChange(item.id, -1)}
                        disabled={currentQty <= 1}
                        className="text-gray-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Decrease quantity or remove"
                      >
                        {currentQty <= 1 ? (
                          <Trash2 className="h-5 w-5 text-gray-500" />
                        ) : (
                          <span className="text-xl font-medium">−</span>
                        )}
                      </button>

                      <span className="min-w-6 text-center text-lg font-semibold text-gray-900">
                        {currentQty}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleCarouselQtyChange(item.id, 1)}
                        className="text-xl font-medium text-gray-500 hover:text-black"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-1 sm:-left-6 md:-left-12 z-10 bg-white/80 backdrop-blur-sm" />
        <CarouselNext className="right-1 sm:-right-6 md:-right-12 z-10 bg-white/80 backdrop-blur-sm" />
      </Carousel>
    </div>
  );
}