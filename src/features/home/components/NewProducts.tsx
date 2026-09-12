import { useState } from 'react'
import { Button } from '@/components'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart, Star } from 'lucide-react'
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
            <div
              key={product.id}
              className="flex w-70 flex-col  gap-2 rounded-lg border border-gray-200 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain"
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
                <Button variant="primary" size="sm" className="gap-1.5">
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
