import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import HomePage from '@/pages/HomePage';
import ProductList from '@/pages/ProductList';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout children={undefined} /> /* or via nesting */}>
        <Route index element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
      </Route>
    </Routes>
  );
}