import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  
  const isMinLength = newPassword.length >= 6;
  const hasNumber = /\d/.test(newPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!isMinLength || !hasNumber) {
      alert('Please meet all password requirements.');
      return;
    }

    console.log('Password reset successfully!');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4F5F7] p-4 font-sans">
      {/* Main Container Card */}
      <div className="relative flex w-full max-w-[650px] min-h-[520px] flex-col items-center justify-center rounded-[32px] bg-white p-8 shadow-xl">
        
        {/* Back Button */}
        <Link
          to="/forgot-password"
          className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-gray-600 transition hover:bg-gray-200"
          aria-label="Back"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>

        {/* Content Box */}
        <div className="flex w-full max-w-[340px] flex-col items-center text-center">
          
          {/* Header */}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Reset your password
          </h1>
          <p className="mt-2 text-xs font-medium text-gray-500">
            Please enter your new password
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 w-full text-left space-y-4">
            
            {/* New Password */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative w-full">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </span>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="*************"
                  required
                  className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#014162] focus:ring-1 focus:ring-[#014162]"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative w-full">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="*************"
                  required
                  className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#014162] focus:ring-1 focus:ring-[#014162]"
                />
              </div>
            </div>

            {/* Password Validation Hints */}
            <div className="pt-1 space-y-2">
              <p className="text-[11px] font-medium text-gray-600">Your password must contain:</p>
              
              <div className="flex items-center gap-2 text-[11px]">
                <div className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                  isMinLength ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-gray-300 bg-gray-50 text-gray-400'
                }`}>
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className={isMinLength ? 'text-gray-800 font-medium' : 'text-gray-400'}>
                  At least 6 characters
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <div className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                  hasNumber ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-gray-300 bg-gray-50 text-gray-400'
                }`}>
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className={hasNumber ? 'text-gray-800 font-medium' : 'text-gray-400'}>
                  Contains a number
                </span>
              </div>
            </div>

            {/* Done Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-gradient-to-b from-[#014162]/80 via-[#014162]/95 to-[#014162] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
            >
              Done
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}