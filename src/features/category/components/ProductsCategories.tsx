import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import ProductCard from './ProductSingle'
import ProductSkeleton from '@/features/home/components/ProductSkeleton'
import { useCatProducts } from '../hooks/useCatProducts'
import type { ProductHotDeal } from '@/types/global'

const ProductsCategories = ({title , category_id , per_page}:{title:string , category_id:number , per_page:number}) => {
const {data, isLoading}  = useCatProducts(category_id , per_page)
  if (isLoading) {
    return <ProductSkeleton />
  }
  return (
    <div className="w-full min-w-0 overflow-hidden">
       
    <div className="flex w-full flex-col items-start gap-2 xs:gap-3 mb-10 sm:flex-row sm:items-center sm:gap-4 md:gap-10">
    <h2 className="text-xl font-medium text-black xs:text-2xl md:ml-10 md:text-3xl">
      {title}
    </h2>
 
  </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full overflow-hidden px-10"
      >
        <CarouselContent>
          {data?.map((product: ProductHotDeal) => (
            <CarouselItem
              key={`${product.id}-${product.id}`}
              className="basis-full 
             md:basis-1/2 lg:basis-1/3  "
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
)
}


export default ProductsCategories
