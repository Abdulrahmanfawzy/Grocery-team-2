import { type ReactNode } from 'react'
import {Footer, Navbar} from './index';
import Logo from '@/assets/Logo.svg'


interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col bg-app-hovered">
      <Navbar Logo ={Logo} />
      <div className="flex flex-1">
        <main className="flex-1">{children}</main>
      </div>
      <Footer Logo={Logo}  />
    </div>
  )
}
