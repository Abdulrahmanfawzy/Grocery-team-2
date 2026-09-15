import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
<<<<<<< HEAD
=======
import ProfileLayout from '@/components/layout/ProfileLayout';
>>>>>>> ee1d787 (Merge pull request #15 from Abdulrahmanfawzy/profile)
import CartPage from '@/features/cart/pages/CartPage';

// Auth Pages Imports
<<<<<<< HEAD
import Login from '@/auth/Login';
import ForgotPassword from '@/auth/ForgotPassword';
import VerifyOTP from '@/auth/VerifyOTP';
import ResetPassword from '@/auth/ResetPassword';
import Signup from '@/auth/Signup';
import HomePage from '@/pages/HomePage';
import ProductList from '@/pages/ProductList';
import ProductDetails from '@/pages/ProductDetails';
import Category from '@/features/category';
=======
import Login from '@/features/auth/Login';
import ForgotPassword from '@/features/auth/ForgotPassword';
import VerifyOTP from '@/features/auth/VerifyOTP';
import ResetPassword from '@/features/auth/ResetPassword';
import Signup from '@/features/auth/Signup';

// Profile pages Imports
import { PersonalInfo } from '@/profile/PersonalInfo';

>>>>>>> ee1d787 (Merge pull request #15 from Abdulrahmanfawzy/profile)

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
          <Route path="personal-info" element={<PersonalInfo />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
<<<<<<< HEAD
        <Route path='/categories' element={<Category/> }/>
=======
>>>>>>> ee1d787 (Merge pull request #15 from Abdulrahmanfawzy/profile)
      </Route>
    </Routes>
  );
}








