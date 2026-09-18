import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout';

// Auth Pages Imports

import { CheckoutPage } from '@/features/checkout/components/CheckoutPage';
import { PaymentPage } from '@/features/checkout/components/PaymentPage';
import { TrackOrderPage } from '@/features/checkout/components/TrackOrderPage';
import Signup from '@/features/auth/Signup';
import Login from '@/features/auth/Login';
import ForgotPassword from '@/features/auth/ForgotPassword';
import VerifyOTP from '@/features/auth/VerifyOTP';
import ResetPassword from '@/features/auth/ResetPassword';
import ProductList from '@/pages/ProductList';
import ProductDetails from '@/pages/ProductDetails';
import Category from '@/features/category';
import HomePage from '@/features/home';
import ProfileLayout from '@/components/layout/ProfileLayout';
import { PersonalInfo } from '@/profile/PersonalInfo';
import CartPage from '@/features/cart/pages/CartPage';
import AuthGuard from '@/features/auth/components/AuthGuard';

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
          <Route path="personal-info" element={<PersonalInfo />} />
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
