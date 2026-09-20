import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Trash2 } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Product } from "@/features/products/types/product.types";
import useAddCartItem from "@/features/cart/hooks/useAddCartItem";

interface FrequentlyBoughtTogetherCarouselProps {
  products: Product[];
  carouselQuantities: Record<number, number>;
  handleCarouselQtyChange: (itemId: number, delta: number) => void;
  handleCarouselReset: (itemId: number) => void;
}

const getImageUrl = (image?: string) => {
  if (!image) return "";

  if (image.includes("/storage/https://")) {
    return image.replace(
      "https://round-grocery.huma-volve.com/storage/https://",
      "https://"
    );
  }

  return image;
};

export function FrequentlyBoughtTogetherCarousel({
  products,
  carouselQuantities,
  handleCarouselQtyChange,
  handleCarouselReset,
}: FrequentlyBoughtTogetherCarouselProps) {
  const { mutate: addProductToCart } = useAddCartItem();

  const [pendingProductId, setPendingProductId] = useState<number | null>(
    null
  );

  const handleAddToCart = (item: Product) => {
    const currentQty = carouselQuantities[item.id] || 1;

    setPendingProductId(item.id);

    addProductToCart(
      {
        productId: Number(item.id),
        quantity: currentQty,
      },
      {
        onSettled: () => {
          setPendingProductId(null);
        },
      }
    );
  };

  return (
    <div className="mt-10 sm:mt-16">
      <h2 className="mb-4 text-base font-bold text-gray-900 sm:mb-6 sm:text-lg md:text-xl">
        Frequently Bought Together
      </h2>

<Carousel
  opts={{
    align: "start",
    loop: false,
  }}
  className="relative w-full px-2 sm:px-10 md:px-12"
>
  <CarouselContent className="-ml-3 sm:-ml-4">
          {products.slice(0, 8).map((item) => {
            const currentQty = carouselQuantities[item.id] || 1;
            const isAdding = pendingProductId === item.id;

            const price = Number(item.discount_price ?? item.price);
            const totalPrice = price * currentQty;

            return (
<CarouselItem
  key={item.id}
  className="basis-full pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 lg:basis-1/4"
>
                <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-2.5 shadow-sm sm:p-4">
                  {/* Product Info */}
                  <div>
                    {/* Discount Tag */}
                    {item.discount_price && (
                      <div className="mb-2">
                        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                          Discount
                        </span>
                      </div>
                    )}

                    {/* Image & Title */}
                    <Link
                      to={`/productdetails/${item.id}`}
                      className="block"
                    >
                      {item.image?.[0] && (
                        <img
                          src={getImageUrl(item.image[0])}
                          alt={item.name}
                          className="my-2 h-36 w-full rounded-md object-cover transition-transform duration-300 hover:scale-105 sm:h-40"
                        />
                      )}

                      <h3 className="mt-2 line-clamp-1 text-sm font-medium text-gray-900 transition-colors hover:text-primary">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="my-1 flex items-center gap-1">
                      {[...Array(5)].map((_, index) => {
                        const filled =
                          index < Math.round(item.average_rating);

                        return (
                          <Star
                            key={index}
                            className={`h-3.5 w-3.5 ${
                              filled
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        );
                      })}

                      <span className="ml-1 text-xs text-gray-500">
                        {item.average_rating}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-1 flex items-center gap-2">
                      <p className="font-bold text-gray-900">
                        £ {totalPrice.toFixed(2)}
                      </p>

                      {item.discount_price && (
                        <p className="text-xs text-gray-400 line-through">
                          £ {(Number(item.price) * currentQty).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    {/* Add To Cart */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      disabled={isAdding}
                      className="flex flex-1 items-center justify-center rounded-md bg-[#004A6B] py-2 text-base font-semibold text-white transition-colors hover:bg-[#003852] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <ShoppingCart className="mr-1 h-5 w-5" />

                      {isAdding ? "Adding..." : "Add To Cart"}
                    </button>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 rounded-xl border border-gray-300 px-4 py-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (currentQty <= 1) {
                            handleCarouselReset(item.id);
                          } else {
                            handleCarouselQtyChange(item.id, -1);
                          }
                        }}
                        className="text-gray-500 hover:text-black"
                        aria-label={
                          currentQty <= 1
                            ? "Remove quantity"
                            : "Decrease quantity"
                        }
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
                        onClick={() =>
                          handleCarouselQtyChange(item.id, 1)
                        }
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

        {/* Navigation Arrows */}
<CarouselPrevious
  type="button"
  className="left-0 z-20 bg-white shadow-md sm:-left-6 md:-left-10"
/>

<CarouselNext
  type="button"
  className="right-0 z-20 bg-white shadow-md sm:-right-6 md:-right-10"
/>
      </Carousel>
    </div>
  );
}