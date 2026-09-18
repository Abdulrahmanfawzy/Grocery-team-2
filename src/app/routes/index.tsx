import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import ProfileLayout from '@/components/layout/ProfileLayout';
import CartPage from '@/features/cart/pages/CartPage';
import HomePage from '@/features/home';

// Auth Pages Imports
import Login from '@/features/auth/Login';
import ForgotPassword from '@/features/auth/ForgotPassword';
import VerifyOTP from '@/features/auth/VerifyOTP';
import ResetPassword from '@/features/auth/ResetPassword';
import Signup from '@/features/auth/Signup';

// Profile pages Imports
// import { PersonalInfo } from '@/profile/PersonalInfo';

import ProductList from '@/pages/ProductList';
import ProductDetails from '@/pages/ProductDetails';
import Category from '@/features/category';
import HomePage from '@/features/home';
import ProfileLayout from '@/features/profile/layout/ProfileLayout';
import { PersonalInfo } from '@/features/profile/pages/PersonalInfo';
import CartPage from '@/features/cart/pages/CartPage';
import Dashboard from '@/features/profile/pages/Dashboard';
import Payment from '@/features/profile/pages/Payment';
import OrderHistory from '@/features/profile/pages/OrderHistory';
import SmartLists from '@/features/profile/pages/SmartLists';
import Addresess from '@/features/profile/pages/Addresess';
import Security from '@/features/profile/pages/Security';
import Loyalty from '@/features/profile/pages/Loyalty';
import Help from '@/features/profile/pages/Help';
import { Settings } from 'lucide-react';

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

      {/* Main App Routes (With Navbar & Footer) */}
      <Route element={<MainLayout />}>
        {/* Profile Routes */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="dashboard" element={<Dashboard />} />
        
          <Route path="payment" element={<Payment />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="smart-lists" element={<SmartLists />} />
          <Route path="addresses" element={<Addresess />} />
          <Route path="security-login" element={<Security />} />
          <Route path="loyalty-rewards" element={<Loyalty />} />
          <Route path="help-support" element={<Help />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}








