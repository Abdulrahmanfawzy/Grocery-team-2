import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Button } from '@/components/ui/Button'
import { useAppSelector } from '@/store'
import { useAuth } from '@/features/auth/hooks/useAuthActions'

export function Navbar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={ROUTES.HOME} className="text-xl font-bold">
          Grocery App
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>

          {isAuthenticated ? (
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to={ROUTES.LOGIN}>
              <Button variant="ghost">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
