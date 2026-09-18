import { Link } from 'react-router-dom';
import type { ICategory } from '../types/types'

interface CategoryListProps {
  categories: ICategory[]
  onSelect?: (category: ICategory) => void
  selectedId?: string | number
}

export default function CategoryList({ categories, onSelect, selectedId }: CategoryListProps) {
  return (
    <div className="flex w-full justify-start sm:justify-center gap-3 sm:gap-5 md:gap-7 overflow-x-auto pb-2 px-4 sm:px-0 scrollbar-hide">
      {categories.map((category) => {
        const isSelected = selectedId === category.id

        return (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            onClick={() => onSelect?.(category)}
            className={`flex shrink-0 flex-col w-24 xs:w-28 sm:w-32 md:w-40 items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-3 sm:px-4 sm:py-5 text-center transition-colors hover:border hover:border-app-main ${
              isSelected ? 'border border-app-main' : ''
            }`}
          >
            <img
              src={category.Image}
              alt={category.name}
              width={40}
              className="w-7 sm:w-8 md:w-10 h-auto"
            />
            <span className="text-xs sm:text-sm font-normal leading-tight text-black line-clamp-2">
              {category.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}