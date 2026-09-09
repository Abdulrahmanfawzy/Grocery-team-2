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
    <header className="w-full bg-hovered font-sans pt-6 lg:pt-10">
      <nav className="container mx-auto px-6 sm:px-10 lg:px-16 pb-6 lg:pb-10 flex items-center justify-between lg:justify-between gap-4 lg:gap-8 border-b border-gray-100">
        {/*  Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          <img src={Logo} alt="GroceryPlus Logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-[#112D4E] transition-colors"
          >
            <img src={Home} alt="" className="w-4 h-4" />
            Home
          </Link>
          <Link
            to="/categories"
            className="font-medium flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-[#112D4E] transition-colors"
          >
            <img src={Categories} alt="" className="w-5 h-5" />
            Categories
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:block flex-1 max-w-md xl:max-w-xl mx-4">
          <SearchInput />
        </div>

        {/* Desktop Right Action Items */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/cart"
            className="flex items-center text-sm sm:text-base font-medium gap-2 text-gray-700 hover:text-[#112D4E] transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-[#112D4E]" />
            MY Cart
          </Link>
          <Button size="lg" variant="primary" className="flex items-center  gap-4">
            <img src={ProfileIcon} alt="" width={20}/>
            <span>{name ? `${name} Profile` : 'Profile'}</span>
          </Button>
        </div>

        <div className="lg:hidden">
          <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
            <DrawerTrigger className="p-2 rounded-lg text-app-main hover:bg-gray-100 transition-colors focus:outline-none">
              <Menu className="w-6 h-6" />
            </DrawerTrigger>

            <DrawerContent className="p-0">
              <DrawerHeader className="flex flex-row items-center p-4 justify-between border-b ">
                <DrawerTitle>
                  <img src={Logo} alt="Logo" className="h-7 w-auto" />
                </DrawerTitle>
                <DrawerClose className="p-1 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
                  <X width={30} className="bg-red-500 rounded-md text-white" />
                </DrawerClose>
              </DrawerHeader>

              <div className="p-6 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-6">
                  {/* Search Input for Mobile */}
                  <SearchInput />

                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-3 pt-2">
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="font-medium flex items-center gap-3 text-sm  hover:text-app-main py-2 border-b border-gray-50"
                    >
                      <img src={Home} alt="" className="w-5 h-5" />
                      Home
                    </Link>
                    <Link
                      to="/categories"
                      onClick={() => setOpen(false)}
                      className="font-medium flex items-center gap-3 text-sm  hover:text-app-main py-2 border-b border-gray-50"
                    >
                      <img src={Categories} alt="" className="w-5 h-5" />
                      Categories
                    </Link>
                    <Link
                      to="/cart"
                      onClick={() => setOpen(false)}
                      className="font-medium flex items-center gap-3 text-sm  hover:text-app-main py-2 border-b border-gray-50"
                    >
                      <ShoppingCart className="w-5 h-5 text-app-main" />
                      MY Cart
                    </Link>
                  </div>
                </div>

                {/* Profile Button */}
                <div className="pt-4 border-t mt-auto">
                  <Button
                    variant="primary"
                    className="w-full flex items-center justify-center gap-2 py-2.5"
                  >
                    <img src={ProfileIcon} alt="" className="w-4 h-4" />
                    <span>{name ? `${name} Profile` : 'Profile'}</span>
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
