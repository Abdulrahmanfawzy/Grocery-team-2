import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import HomePage from '@/pages/HomePage';
import CartPage from '@/features/cart/pages/CartPage';
import HomePage from '@/features/home';

// Auth Pages Imports
import Signup from '@/auth/signup'; 
import Login from '@/auth/Login';
import ForgotPassword from '@/auth/ForgotPassword';
import VerifyOTP from '@/auth/VerifyOTP';
import ResetPassword from '@/auth/ResetPassword';

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
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
