import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout'
import CartPage from '@/features/cart/pages/CartPage';
import HomePage from '@/features/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    </Routes>
  )
}
