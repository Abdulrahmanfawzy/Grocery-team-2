import { PackageX } from 'lucide-react'

type ProductNotFoundProps = {
  title?: string
  message?: string
}

const ProductNotFound = ({
  title = 'No products found',
  message = 'There are no products in this category right now.',
}: ProductNotFoundProps) => {
  return (
    <div className="flex w-full col-span-full flex-col  items-center justify-center gap-3 rounded-lg border border-dashed border-gray-200 py-16 text-center">
      <PackageX className="size-12 text-gray-300" />
      <p className="text-lg font-semibold text-app-main">{title}</p>
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  )
}

export default ProductNotFound