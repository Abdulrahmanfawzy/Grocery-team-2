import { useState, useEffect } from 'react'
import { Button } from '@/components'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart, Star } from 'lucide-react'
import type { ProductHotDeal, Propstype } from '@/types/global'
import { Link } from 'react-router-dom'
import RatingStars from '../ui/Stars'
import ProductSkeleton from './ProductSkeleton'
import useHotDeal from '../hooks/useHotDeal'
import { useCategory } from '@/features/category/hooks/useCategory'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import type { ICategory } from '@/features/category/types/types'
import ProductNotFound from './NotFound'
import useAddCartItem from '@/features/cart/hooks/useAddCartItem'

const HotDeals = ({ title }: Propstype) => {
  //States
  const { data: categories = [] } = useCategory()
  const [activeTab, setActiveTab] = useState<number>(4)

  // Request HotDeal Data and Using AddToCart
  const { data, isLoading, isError } = useHotDeal({ category_id: activeTab, limit: 6 })
  const {mutate:addToCart}=useAddCartItem()
  //handle tab change
  useEffect(() => {
    if (categories.length > 0 && activeTab === null) {
      setActiveTab(categories[0].id)
    }
  }, [categories, activeTab])
  // Functions 
  const HandelAddCart = (productId:number)=> {
    addToCart({productId ,quantity:1})
  }
  //Loading
  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    ) 

  return (
    <section className="w-full  mx-auto">
      <main className=" flex flex-col gap-20 md:gap-10">
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <h2 className="shrink-0 text-xl font-bold text-app-linera md:text-2xl lg:text-3xl">
            {title}
          </h2>

          <Tabs
            value={activeTab?.toString()}
            onValueChange={(value) => setActiveTab(Number(value))}
            className="w-full min-w-0 md:w-auto"
          >
            {/* 3 tabs: 3 × 7rem + gaps + padding ≈ 22rem (28rem on md) */}
            <ScrollArea className="mx-auto w-88 max-w-full whitespace-nowrap md:w-md" dir="ltr">
              <TabsList className="inline-flex h-auto w-max justify-start gap-1 my-3">
                {categories.map((category: ICategory) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id.toString()}
                    className="h-9 w-28 shrink-0 truncate px-3 text-sm md:w-36 md:text-[18px]"
                  >
                    {category.name_en}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1">
          {isError && <ProductNotFound />}
          {data?.map((product: ProductHotDeal) => (
            <Link
              to={`/productdetails/${product.id}`}
              key={product.id}
              className="flex w-60 flex-col  gap-2 rounded-lg border border-gray-200 p-4"
            >
              <img
                src={product.image[0] || `${product.name}`}
                alt={product.name}
                className="h-40 w-full object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-gray-400">{product.category}</p>
                <p className="text-[18px] font-normal text-app-main">{product.name}</p>
              </div>
              <div className="flex items-start flex-col gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`size-3.5 ${
                        index < product.rating ? 'fill-app-yellow text-app-yellow' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  By <span className="text-app-main">{product.vendor}</span>
                </p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-app-main">${product.price}</p>
                  <p className="text-sm text-gray-400 line-through">${product.originalPrice}</p>
                </div>
                <Button variant="primary" size="sm" className="gap-1.5 cursor-pointer" onClick={()=>HandelAddCart(product.id)}>
                  <ShoppingCart className="size-4" /> Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default HotDeals
