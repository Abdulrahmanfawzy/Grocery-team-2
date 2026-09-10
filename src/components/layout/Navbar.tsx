import { useState } from 'react'
import Home from '@/assets/Home.svg'
import Categories from '@/assets/Category.svg'
import ProfileIcon from '@/assets/iconProfile.svg'
import { Link } from 'react-router-dom'
import SearchInput from '../ui/InputSearch'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '../ui'
import type { Propstype } from '@/types/global'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export const Navbar = ({ name, Logo }: Propstype) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white font-sans pt-6 lg:pt-10">
      <nav className="container mx-auto flex justify-between items-center gap-4 border-b border-gray-100 px-4 pb-6 sm:px-6 lg:gap-6 lg:px-8 lg:pb-10">
        {/* Logo + Desktop Navigation Links */}
        <div className="flex shrink-0 items-center gap-6 lg:gap-8">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="GroceryPlus Logo" className="h-8 w-auto sm:h-10" />
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#112D4E] sm:text-base"
            >
              <img src={Home} alt="" className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/categories"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#112D4E] sm:text-base"
            >
              <img src={Categories} alt="" className="h-5 w-5" />
              Categories
            </Link>
          </div>
        </div>

        {/* Search Bar — hidden on small mobile, visible from md up */}
        <div className="hidden min-w-0 flex-1 md:block">
          <SearchInput />
        </div>

        {/* Right actions — same edge inset as the logo on the left */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/profiledashboard"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#112D4E] sm:text-base"
            >
              <ShoppingCart className="h-5 w-5 text-[#112D4E]" />
              My Cart
            </Link>
            <Button size="lg" variant="primary" className="flex items-center gap-2">
              <img src={ProfileIcon} alt="" width={20} />
              <span>{name ? `${name} Profile` : 'Profile'}</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
              <DrawerTrigger className="rounded-lg p-2 text-app-main transition-colors hover:bg-gray-100 focus:outline-none">
                <Menu className="h-6 w-6" />
              </DrawerTrigger>

              <DrawerContent className="p-0">
                <DrawerHeader className="flex flex-row items-center justify-between border-b p-4">
                  <DrawerTitle>
                    <img src={Logo} alt="Logo" className="h-7 w-auto" />
                  </DrawerTitle>
                  <DrawerClose className="rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100">
                    <X width={20} className="rounded-md bg-red-500 p-1 text-white" />
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex h-full flex-col justify-between space-y-6 p-6">
                  <div className="space-y-6">
                    {/* Search Input for Mobile */}
                    <SearchInput />

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-3 pt-2">
                      <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 border-b border-gray-50 py-2 text-sm font-medium hover:text-app-main"
                      >
                        <img src={Home} alt="" className="h-5 w-5" />
                        Home
                      </Link>
                      <Link
                        to="/categories"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 border-b border-gray-50 py-2 text-sm font-medium hover:text-app-main"
                      >
                        <img src={Categories} alt="" className="h-5 w-5" />
                        Categories
                      </Link>
                      <Link
                        to="/profiledashboard"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 border-b border-gray-50 py-2 text-sm font-medium hover:text-app-main"
                      >
                        <ShoppingCart className="h-5 w-5 text-app-main" />
                        My Cart
                      </Link>
                    </div>
                  </div>

                  {/* Profile Button */}
                  <div className="mt-auto border-t pt-4">
                    <Button
                      variant="primary"
                      className="flex w-full items-center justify-center gap-2 py-2.5"
                    >
                      <img src={ProfileIcon} alt="" className="h-4 w-4" />
                      <span>{name ? `${name} Profile` : 'Profile'}</span>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
