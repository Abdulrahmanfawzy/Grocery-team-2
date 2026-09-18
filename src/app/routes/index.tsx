import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';

// Auth Pages Imports
import Signup from '@/features/auth/Signup';
import Login from '@/features/auth/Login';
import ForgotPassword from '@/features/auth/ForgotPassword';
import VerifyOTP from '@/features/auth/VerifyOTP';
import ResetPassword from '@/features/auth/ResetPassword';
import ProductList from '@/features/products/pages/ProductList';
import ProductDetails from '@/features/products/pages/ProductDetails';
import Category from '@/features/category';
import HomePage from '@/features/home';
import ProfileLayout from '@/components/layout/ProfileLayout';
import { PersonalInfo } from '@/profile/PersonalInfo';
import CartPage from '@/features/cart/pages/CartPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes (Without MainLayout) */}
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Main App Routes (Inside MainLayout) */}
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personal-info" element={<PersonalInfo />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path='/categories' element={<Category />} />
      </Route>
    </Routes>
  );
}
