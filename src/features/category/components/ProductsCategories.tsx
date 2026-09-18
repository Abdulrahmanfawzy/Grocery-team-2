import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { hotDealsProducts } from '@/constants/ProductHotDeal'
import ProductCard from './ProductSingle'

const ProductsCategories = () => {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full overflow-hidden px-10"
      >
        <CarouselContent>
          {hotDealsProducts.map((product, index) => (
            <CarouselItem key={`${product.id}-${index}`} className="basis-full 
             md:basis-1/2 lg:basis-1/3  ">
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
