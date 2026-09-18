import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout';

// Auth Pages Imports

import { CheckoutPage } from '@/features/checkout/components/CheckoutPage';
import { PaymentPage } from '@/features/checkout/components/PaymentPage';
import { TrackOrderPage } from '@/features/checkout/components/TrackOrderPage';
import Login from '@/features/auth/Login';
import ForgotPassword from '@/features/auth/ForgotPassword';
import VerifyOTP from '@/features/auth/VerifyOTP';
import ResetPassword from '@/features/auth/ResetPassword';
import ProductList from '@/features/products/pages/ProductList';
import ProductDetails from '@/features/products/pages/ProductDetails';
import Category from '@/features/category';
import HomePage from '@/features/home';
import ProfileLayout from '@/features/profile/layout/ProfileLayout';
import { PersonalInfo } from '@/features/profile/pages/PersonalInfo';
import CartPage from '@/features/cart/pages/CartPage';
import AuthGuard from '@/features/auth/components/AuthGuard';
import Dashboard from '@/features/profile/pages/Dashboard';
import Payment from '@/features/profile/pages/Payment';
import OrderHistory from '@/features/profile/pages/OrderHistory';
import SmartLists from '@/features/profile/pages/SmartLists';
import Addresess from '@/features/profile/pages/Addresess';
import Security from '@/features/profile/pages/Security';
import Loyalty from '@/features/profile/pages/Loyalty';
import Help from '@/features/profile/pages/Help';
import { Settings } from 'lucide-react';
import Signup from '@/features/auth/Signup';

export function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes — guarded, redirect to home if already logged in */}
      <Route element={<AuthGuard />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Main App Routes (Inside MainLayout) */}
      <Route element={<MainLayout />}>
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
        {/* checkout routes */}
        <Route path="/checkout/shipping" element={<CheckoutPage />} />
        <Route path="/checkout/payment" element={<PaymentPage />} />
        <Route path="/checkout/tracking" element={<TrackOrderPage />} />

        <Route
          path="*"
          element={<Navigate to="/checkout/shipping" replace />}
        />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path='/categories' element={<Category />} />
      </Route>
    </Routes>
  );
}
