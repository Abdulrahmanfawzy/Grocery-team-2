import { Link } from "react-router-dom"

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center ">
          {item.path ? (
            <Link
              to={item.path}
              className="text-app-grey hover:text-app-main font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-app-main font-medium">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span className="text-app-grey">/</span>
          )}
        </div>
      ))}
    </nav>
  )
}