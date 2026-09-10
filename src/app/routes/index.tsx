import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout'
import HomePage from '@/pages/HomePage';
import CartPage from '@/features/cart/pages/CartPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Route>
    </Routes>
  )
}
