import { useState } from 'react'
import { ShoppingCart, Star, Trash2, Plus, Minus } from 'lucide-react'
import type { ProductHotDeal } from '@/types/global'
import { Button } from '@/components/ui'

export default function ProductCard({
  name,
  category,
  image,
  rating,
  originalPrice,
  price,
}: ProductHotDeal) {
  const [quantity, setQuantity] = useState(1)

  const fullStars = Math.round(rating)

  return (
    <div className="h-fit  min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-app-web p-4 shadow-sm">
      {/* Badges */}
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="bg-app-main rounded-full bg-app-hovered-web text-app-hovered-web px-3 py-1 text-xs font-medium text-white">
          In Stock
        </span>

        {originalPrice && (
          <span className="rounded-full  bg-app-main px-3 py-1 text-xs font-medium text-white">
            Sale
          </span>
        )}

        <span className="rounded-full bg-app-main px-3 py-1 text-xs font-medium text-white">
          New
        </span>
      </div>

      {/* Image */}
      <div className="mb-4 flex h-40 w-full ">
        <img src={image} alt={name} className='h-full object-contain' />
      </div>

      {/* Title + Price */}
      <div className="mb-2 flex items-start o max-w-[70%] justify-between gap-3">
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-[12px] md:text-base font-medium text-slate-900">{name}</h3>

          {category && <p className="mt-1 text-xs text-slate-400">{category}</p>}
        </div>

        <div className=" text-right flex flex-col justify-center gap-3">
          <span className=" font-bold text-[9px] py-0.5 md:text-base  text-slate-900">$ {price.toFixed(1)}</span>

          {originalPrice && (
            <p className=" text-[9px] md:text-base  text-slate-400 line-through">$ {originalPrice.toFixed(1)}</p>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < fullStars ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'
            }
          />
        ))}

        <span className="ml-1 text-xs text-slate-400">({rating}/5)</span>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row  items-center gap-2 ">
        <Button variant="primary" className="gap-2 text-sm w-full  md:text-base md:w-35  ">
          <ShoppingCart size={16} />
          <span className="text-[12px] md:block md:text-[12px] "> Add To Cart</span>
        </Button>

        <div className="flex justify-between w-full items-center gap-2 py-0.5 rounded-xl border border-gray-400 md:w-35   ">
          {quantity > 0 && (
            <Button
              variant="secondary"
              size="sm"
              className='hover:bg-gray-300 '
              onClick={() => setQuantity((q) => (q <= 1 ? 0 : q - 1))}
              aria-label={quantity <= 1 ? 'Remove item' : 'Decrease quantity'}
            >
              {quantity <= 1 ? (
                <Trash2 size={16} className="text-app-main" />
              ) : (
                <Minus size={16} className="text-app-main" />
              )}
            </Button>
          )}
          <span className="w-4 text-center text-sm font-medium text-slate-900">{quantity}</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="text-app-main  hover:text-gray-300 hover:bg-gray-300"
          >
            <Plus size={16} className='text-app-main' />
          </Button>
        </div>
      </div>
    </div>
  )
}
