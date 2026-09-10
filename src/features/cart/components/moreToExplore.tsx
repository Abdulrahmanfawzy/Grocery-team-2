import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Product } from "../types/product.types";
import ExploreCard from "./exploreCard";
import vColaImage from "../../../assets/Vcola.svg";

const MoreToExplore = () => {
    const products: Product[] = [
  {
    id: 1,
    name: "Spiro Spathis Lemon",
    image: vColaImage,
    price: 8.8,
    oldPrice: 11,
    rating: 3.8,
    
    inStock: true,
    discount: 20,
    isNew: true, quantity: 1,
  },
  {
    id: 2,
    name: "V7 Cola - 300Ml",
    image: vColaImage,
    price: 15,
    rating: 4,
    
    inStock: true, quantity: 1,
  },
  {
    id: 3,
    name: "Nestlé Pure Life 6 L",
    image: vColaImage,
    price: 60,
    rating: 5,
   
    inStock: true, quantity: 1,
  },
  {
    id: 4,
    name: "Sparkling Water",
    image: vColaImage,
    price: 25,
    rating: 4.5,
    
    inStock: true, quantity: 1,
  },
  {
    id: 5,
    name: "Fresh Juice",
    image: vColaImage,
    price: 30,
    rating: 4,
   
    inStock: true,
    quantity: 1,
  },
];
  return (
    <section className="w-full max-w-full  overflow-hidden px-2 py-6 sm:px-4">
      <h2 className="mb-4 text-[20px] font-medium text-black sm:mb-6 sm:text-[24px]">
        More To Explore
      </h2>

 <Carousel
  opts={{
    align: "start",
    loop: false,
    slidesToScroll: 1,
  }}
  className=" md:w-full w-[350px] overflow-hidden"
>
  <CarouselContent className="-ml-2 sm:-ml-3">
    {products.map((product) => (
      <CarouselItem
        key={product.id}
        className="basis-full pl-2 sm:basis-1/2 sm:pl-3 lg:basis-1/3"
      >
        <ExploreCard
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
          inStock={product.inStock}
          discount={product.discount}
          isNew={product.isNew}
        />
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="left-0 " />
  <CarouselNext className="right-0" />
</Carousel>
    </section>
  );
};

export default MoreToExplore;