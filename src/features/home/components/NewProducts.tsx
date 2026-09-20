import { useEffect, useState } from 'react'
import { Button } from '@/components'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart, Star } from 'lucide-react'
<<<<<<< Updated upstream
import { hotDealsProducts } from '@/constants/ProductHotDeal';
import type { Propstype } from '@/types/global';

const categories = ['Fruits', 'Vegetables', 'Coffe & teas', 'Meat'] as const



const NewProducts = ({title} : Propstype) => {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]>(
    'Fruits',
  )

  const products = hotDealsProducts.filter(
    (product) => product.category === activeTab,
  )

  return (
    <section className="w-full max-w-[85%] mx-auto  ">
      <main className="container mx-auto flex flex-col gap-4 px-4">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
  <h2 className="text-2xl font-bold text-app-linera md:ml-8 md:text-3xl">
    {title}
  </h2>
  <Tabs
    value={activeTab}
    onValueChange={(value) =>
      setActiveTab(value as (typeof categories)[number])
    }
    className="w-full md:w-auto"
  >
    <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4 md:inline-flex md:w-fit md:flex-nowrap md:justify-end">
      {categories.map((category) => (
        <TabsTrigger
          key={category}
          value={category}
          className="h-9 w-full px-3 text-sm sm:text-base md:w-auto md:flex-none md:text-[18px]"
        >
          {category}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
</div>
        <div className="Product flex flex-wrap justify-center gap-3.5">
          {products.map((product) => (
=======
import type { ProductHotDeal, Propstype } from '@/types/global'
import RatingStars from '../ui/Stars'
import ProductSkeleton from './ProductSkeleton'
import useNewProduct from '../hooks/useNewProduct'
import { useCategory } from '@/features/category/hooks/useCategory'
import ProductNotFound from './NotFound'
import type { ICategory } from '@/features/category/types/types'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import useAddCartItem from '@/features/cart/hooks/useAddCartItem'

const NewProducts = ({ title }: Propstype) => {
  //States

  const { data: categories = [] } = useCategory()
  const [activeTab, setActiveTab] = useState<number>(4)
  // Request NewProducts Data and Using AddToCart
  const { data, isLoading, isError } = useNewProduct({ category_id: activeTab, limit: 6 })
  const { mutate: addToCart } = useAddCartItem()

  //handle tab change
  useEffect(() => {
    if (categories.length > 0 && activeTab === null) {
      setActiveTab(categories[0].id)
    }
  }, [categories, activeTab])
  // Functions

  const HandelAddCart = (productId:number) => {
    addToCart({ productId, quantity: 1 })
  }
  //Loading
  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    )
  return (
    <section className="w-full  mx-auto  ">
      <main className=" mx-auto flex flex-col gap-4 ">
        <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-app-linera md:text-3xl">{title}</h2>

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
        <div className="Product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
          {isError && <ProductNotFound />}
          {data?.map((product: ProductHotDeal) => (
>>>>>>> Stashed changes
            <div
              key={product.id}
              className="flex w-70 flex-col  gap-2 rounded-lg border border-gray-200 p-4"
            >
              <img
<<<<<<< Updated upstream
                src={product.image}
=======
                src={product.image[0]}
>>>>>>> Stashed changes
                alt={product.name}
                width={500}
                className="h-40 w-full object-contain "
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal text-gray-400">
                  {product.category}
                </p>
                <p className="text-[18px] font-normal text-app-main">
                  {product.name}
                </p>
              </div>
              <div className="flex items-start flex-col gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`size-3.5 ${
                        index < product.rating
                          ? 'fill-app-yellow text-app-yellow'
                          : 'text-gray-300'
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
                  <p className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="gap-1.5 cursor-pointer"
                  onClick={()=>HandelAddCart(product.id)}
                >
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

export default NewProducts
