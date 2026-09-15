import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const getForgotPasswordSchema = (method: 'email' | 'phone') => {
  return z.object({
    inputValue:
      method === 'email'
        ? z
            .string()
            .min(1, 'Email is required')
            .email('Invalid email address')
        : z
            .string()
            .min(1, 'Phone number is required')
            .min(8, 'Phone number must be at least 8 characters'),
  });
};

type ForgotPasswordFormValues = {
  inputValue: string;
};

export default function ForgotPassword() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(getForgotPasswordSchema(method)),
    defaultValues: {
      inputValue: '',
    },
  });

  const handleMethodChange = (newMethod: 'email' | 'phone') => {
    setMethod(newMethod);
    reset({ inputValue: '' });
  };

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(`Sending recovery code via ${method}:`, data.inputValue);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4F5F7] p-4 font-sans">
      <div className="relative flex w-full max-w-[650px] min-h-[480px] flex-col items-center justify-center rounded-[32px] bg-white p-8 shadow-xl">
        
        {/* Back Button */}
        <Link
          to="/login"
          className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-gray-600 transition hover:bg-gray-200"
          aria-label="Back to Login"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>

        <div className="flex w-full max-w-[340px] flex-col items-center text-center">
          
          {/* Title */}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Password Recovery
          </h1>
          <p className="mt-2 text-xs font-medium text-gray-500">
            {method === 'email' 
              ? 'Enter your Email address to recover your password' 
              : 'Enter your Phone Number to recover your password'}
          </p>

          {/* Toggle Buttons */}
          <div className="mt-5 flex w-full rounded-xl bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => handleMethodChange('email')}
              className={`w-1/2 rounded-lg py-1.5 text-xs font-semibold transition ${
                method === 'email' ? 'bg-white text-[#014162] shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => handleMethodChange('phone')}
              className={`w-1/2 rounded-lg py-1.5 text-xs font-semibold transition ${
                method === 'phone' ? 'bg-white text-[#014162] shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Phone
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full space-y-4">
            
            <Controller
              name="inputValue"
              control={control}
              render={({ field }) => (
                <div className="text-left">
                  <div className="relative w-full">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      {method === 'email' ? (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      )}
                    </span>
                    <input
                      {...field}
                      type={method === 'email' ? 'email' : 'tel'}
                      placeholder={method === 'email' ? 'Email@gmail.com' : '+20 1163982057'}
                      className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#014162] focus:ring-1 focus:ring-[#014162]"
                    />
                  </div>
                  {errors.inputValue && (
                    <p className="mt-1 text-xs text-red-500">{errors.inputValue.message}</p>
                  )}
                </div>
              )}
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-b from-[#014162]/80 via-[#014162]/95 to-[#014162] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
            >
              Verify
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}


  

