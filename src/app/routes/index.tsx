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
import { PersonalInfo } from '@/profile/PersonalInfo';

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
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Profile Routes */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personal-info" element={<PersonalInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}








