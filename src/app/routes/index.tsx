import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import HomePage from '@/pages/HomePage';
import ProductList from '@/pages/ProductList';
import ProductDetails from '@/pages/ProductDetails';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout children={undefined} /> /* or via nesting */}>
        <Route index element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}