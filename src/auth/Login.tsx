import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 font-sans">
      {/* Main Container */}
      <div className="flex w-full max-w-[1000px] overflow-hidden rounded-3xl bg-white shadow-md">
        
        {/* Left Side */}
        <div 
          className="hidden w-1/2 items-center justify-center bg-[#003B5C] bg-cover bg-center p-8 lg:flex"
          style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
        >
          
          
        </div>

        {/* Right Side */}
        <div className="w-full p-8 sm:p-10 lg:w-1/2">
          
          {/* Header */}
          <div className="mb-6 ">
           <h1 className="font-sora text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Login your account!
            </h1>
            <p className="mt-8 font-sora text-base text-16 font-semibold leading-none tracking-normal text-gray-700">
              Welocme to Grocery Plus
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600">
                {/* Mail Icon */}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Sarahem@gmail.com"
                required
                className="w-full rounded-sm border border-gray-100 py-2.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600">
                {/* Lock Icon */}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="w-full rounded-sm border border-gray-100 py-2.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]
                shadow-#00000040"
              />
            </div>

            {/* Forget Password */}
            <div className="pt-1 text-left">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-gray-700 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-b from-[#014162]/50 via-[#014162]/80 to-[#014162] py-3 text-base font-medium text-white shadow-md transition hover:bg-[#01304a] active:scale-[0.99]"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 text-center">
            <span className="text-sm text-gray-600">Continue In With</span>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl  bg-[#F4F6F8] hover:bg-[#E9ECEF] py-3  text-sm font-medium text-gray-700 transition "
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continue with google
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F4F6F8] hover:bg-[#E9ECEF] py-3 text-sm font-medium text-gray-700 transition "
            >
              <svg className="h-4 w-4 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-semibold text-[#014162] hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}


