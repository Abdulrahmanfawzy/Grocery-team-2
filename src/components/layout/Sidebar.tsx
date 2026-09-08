import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/store'

const navItems = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD },
  { label: 'Products', path: ROUTES.PRODUCTS },
  { label: 'Users', path: ROUTES.USERS },
  { label: 'Orders', path: ROUTES.ORDERS },
]

export function Sidebar() {
  const location = useLocation()
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  if (!isAuthenticated) return null

  return (
    <aside className="w-64 border-r bg-muted/30">
      <div className="flex h-full flex-col p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
