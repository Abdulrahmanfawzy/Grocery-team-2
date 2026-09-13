
import {Footer, Navbar} from './index';
import Logo from '@/assets/Logo.svg'
import { Outlet } from 'react-router-dom';


interface MainLayoutProps {
  // children: ReactNode
}

export function MainLayout({  }: MainLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col bg-app-hovered  mx-auto">
      <Navbar Logo ={Logo} />
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer Logo={Logo}  />
    </div>
  )
}
