
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signupSchema = z.object({
  userName: z
    .string()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .min(8, 'Phone number must be at least 8 characters'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userName: '',
      email: '',
      phone: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log('Signing up with:', data);
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
        <div className="flex w-full flex-col justify-center p-6 sm:p-10 lg:w-1/2">

          {/* Header */}
          <div className="mb-6">
            <h1 className="font-sora text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Create your account!
            </h1>
            <p className="mt-2 font-sora text-sm font-medium text-gray-600">
              Enter your Full Details
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Username Input */}
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </span>
                    <input
                      {...field}
                      type="text"
                      placeholder="Username"
                      className="w-full rounded-sm border border-gray-200 py-2.5 pl-11 pr-4 text-xs text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]"
                    />
                  </div>
                  {errors.userName && (
                    <p className="mt-1 text-xs text-red-500">{errors.userName.message}</p>
                  )}
                </div>
              )}
            />

            {/* Email Input */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      {...field}
                      type="email"
                      placeholder="Sarahem@gmail.com"
                      className="w-full rounded-sm border border-gray-200 py-2.5 pl-11 pr-4 text-xs text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              )}
            />

            {/* Phone Input */}
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <input
                      {...field}
                      type="tel"
                      placeholder="Phone"
                      className="w-full rounded-sm border border-gray-200 py-2.5 pl-11 pr-4 text-xs text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              )}
            />

            {/* Password Input */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                    <input
                      {...field}
                      type="password"
                      placeholder="********"
                      className="w-full rounded-sm border border-gray-200 py-2.5 pl-11 pr-4 text-xs text-gray-800 placeholder-gray-600 outline-none transition focus:border-[#014162] focus:ring-.5 focus:ring-[#014162]"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                  )}
                </div>
              )}
            />

            {/* Remember me */}
            <Controller
              name="remember"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <div className="flex items-center gap-2 pt-1">
                  <input
                    {...field}
                    type="checkbox"
                    id="remember"
                    checked={value}
                    onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#014162] focus:ring-[#014162]"
                  />
                  <label htmlFor="remember" className="cursor-pointer text-xs font-medium text-gray-600">
                    Remember me
                  </label>
                </div>
              )}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-sm bg-gradient-to-b from-[#014162]/70 via-[#014162]/90 to-[#014162] py-2.5 text-sm font-medium text-white shadow-md transition hover:opacity-95 active:scale-[0.99]"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 text-center">
            <span className="text-xs text-gray-500">Sign Up With</span>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F4F6F8] py-2.5 text-xs font-medium text-gray-700 transition hover:bg-[#E9ECEF]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with google</span>
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F4F6F8] py-2.5 text-xs font-medium text-gray-700 transition hover:bg-[#E9ECEF]"
            >
              <svg className="h-4 w-4 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Continue with Facebook</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-xs text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#014162] hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}