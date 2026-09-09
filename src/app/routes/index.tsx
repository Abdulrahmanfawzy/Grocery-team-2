import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout'
import HomePage from '@/pages/HomePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}
