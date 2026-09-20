import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ExploreCard from "./exploreCard";

import useGetHotDealProducts from "../hooks/useHotDealProduct";
import { ErrorState } from "@/components";
import ExploreCardSkeleton from "./exploreCardSkeleton";
const MoreToExplore = () => {
   const { data, isLoading, isError,error }=useGetHotDealProducts();
   const hotDealProducts = data?.data ?? [];

     if (isLoading) {
    return <ExploreCardSkeleton />;
  }
    if (isError) {
       return <ErrorState description={error.message} />;
     }
   
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
        className=" md:w-full w-87.5 overflow-hidden"
      >
        <CarouselContent className="-ml-2 sm:-ml-3">
          {hotDealProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-full pl-2 sm:basis-1/2 sm:pl-3 lg:basis-1/3"
            >
              <ExploreCard
                id={product.id}
                name={product.name}
                image={product.image[0]??''}
                price={product.discount_price}
                oldPrice={product.price}
                rating={product.average_rating}
                inStock={product.quantity > 0}
                discount={product.discount_percentage}
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