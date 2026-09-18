import { Button } from '@/components/ui'
import { Progress } from '@/components/ui/progress'
import { hotDealsProducts } from '@/constants/ProductHotDeal'
import type { Propstype } from '@/types/global'
import { Star, ShoppingCart } from 'lucide-react'

const DailyBest = ({ title }: Propstype) => {
  return (
    <section className="w-full max-w-[85%] mx-auto ">
      <main className="container mx-auto flex flex-col gap-8 px-4">
        <div className="flex w-full flex-col items-start gap-2 xs:gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-10">
          <h2 className="text-xl font-bold text-app-linera xs:text-2xl md:ml-10 md:text-3xl">
            {title}
          </h2>
          <p className="w-full rounded-md bg-app-error px-2 py-2 text-center text-xs whitespace-nowrap text-white xs:text-sm sm:w-auto sm:px-4 sm:text-base md:px-10 md:text-[18px] lg:px-10">
            Expires in: 10 : 56 : 21
          </p>
        </div>
        <div className="Product flex flex-wrap justify-center gap-4 ">
          {hotDealsProducts.slice(0, 6).map((product, index) => {
            const discount = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100,
            )
            const reviewCount = product.rating
            const total = 40
            const sold = Math.min(total, 8 + product.id * 4)
            const soldPercent = (sold / total) * 100

            return (
              <div
                key={`${product.id}-${index}`}
                className="relative w-full max-w-60 overflow-hidden rounded-xl p-0 shadow-sm"
              >
                {discount > 0 && (
                  <div className="absolute left-0 top-3 z-10 rounded-r-full rounded-l-none bg-[#D8A94E] px-3 py-1 text-xs font-semibold text-white hover:bg-[#D8A94E]">
                    Save {discount}%
                  </div>
                )}

                {/* Product image */}
                <div className="flex h-44 w-full items-center justify-center bg-white pt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="flex flex-col gap-1.5 px-4 pb-4 pt-2">
                  <p className="text-xs text-gray-400">{product.category}</p>

                  <p className="text-base font-semibold text-app-main">{product.name}</p>

                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`size-3.5 ${
                            starIndex < product.rating
                              ? 'fill-app-yellow text-app-yellow'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">({reviewCount})</span>
                  </div>

                  <p className="text-sm text-gray-500">
                    By <span className="text-app-main">{product.vendor}</span>
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-app-main">${product.price}</p>
                    <p className="text-sm text-gray-400 line-through">${product.originalPrice}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Progress value={soldPercent} className="h-1.5 [&>div]:bg-[#0B3B5E]" />
                    <p className="text-xs text-gray-500">
                      Sold: {sold}/{total}
                    </p>
                  </div>

                  <Button className="mt-1 w-full gap-1.5 bg-[#0B3B5E] text-white hover:bg-[#0a3252]">
                    <ShoppingCart className="size-4" />
                    Add to cart
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default DailyBest
