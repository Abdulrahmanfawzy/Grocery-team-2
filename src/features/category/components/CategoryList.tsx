import { Link } from 'react-router-dom';
import type { ICategory } from '../types/types'
import { useCategory } from '../hooks/useCategory';
import ProductSkeleton from '@/features/home/components/ProductSkeleton';

interface CategoryListProps {
  categories: ICategory[]
  onSelect?: (category: ICategory) => void
  selectedId?: string | number
}

export default function CategoryList({  onSelect, selectedId  }: CategoryListProps) {
  const {data , isLoading} = useCategory()
  console.log(data);
  
    console.log(data);
    
  if(isLoading){
    return <ProductSkeleton/>
  }
  
  return (
    <div className="flex w-full justify-start sm:justify-center gap-3 sm:gap-5 md:gap-7 overflow-x-auto pb-2 px-4 sm:px-0 scrollbar-hide">
      {data.map((category:ICategory) => {
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
              src={category.image}
              alt={category.name_en}
              width={40}
              className="w-7 sm:w-8 md:w-10 h-auto"
            />
            <span className="text-xs sm:text-sm font-normal leading-tight text-black line-clamp-2">
              {category.name_en}
            </span>
          </Link>
        )
      })}
    </div>
  )
}