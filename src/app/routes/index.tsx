import { Route, Routes } from 'react-router-dom'
import HomePage from '@/features/home';


export function AppRoutes() {
  return (
    <Routes>
        <Route index element={<HomePage/>} path='/'/>
    </Routes>
  )
}
