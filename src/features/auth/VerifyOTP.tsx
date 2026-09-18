import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const verifySchema = z.object({
  otp: z
    .array(z.string().length(1, 'Required'))
    .length(6, 'OTP must be 6 digits'),
});

type VerifyFormValues = z.infer<typeof verifySchema>;

export default function VerifyOTP() {
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { control, handleSubmit, watch } = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      otp: ['', '', '', '', '', ''],
    },
  });

  const otpValues = watch('otp');

  const handleInputChange = (
    index: number,
    value: string,
    onChange: (val: string[]) => void
  ) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1);
    onChange(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    onChange: (val: string[]) => void
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      onChange(digits);
      inputRefs.current[5]?.focus();
    }
  };

  const onSubmit = (data: VerifyFormValues) => {
    const fullOtp = data.otp.join('');
    console.log('Submitted OTP:', fullOtp);
    navigate('/reset-password');
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
        <div className="flex w-full max-w-[380px] flex-col items-center text-center">
          
          {/* OTP Illustration Image */}
<div className="mb-4 flex justify-center">
  <img 
    src="/illustration.svg" 
    alt="OTP Verification Illustration" 
    className="h-30 w-30 object-contain"
  />
</div>

          {/* Title & Description */}
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Enter verification code
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            We Send a code to <span className="font-semibold text-gray-700">(+20) 1163982057</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full flex flex-col items-center">
            
            {/* OTP Inputs */}
            <Controller
              name="otp"
              control={control}
              render={({ field: { onChange } }) => (
                <div className="flex justify-center gap-2.5 sm:gap-3" onPaste={(e) => handlePaste(e, onChange)}>
                  {otpValues.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value, onChange)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg border border-gray-200 bg-[#F8FAFC] text-center text-sm font-semibold text-gray-800 outline-none transition focus:border-[#014162] focus:bg-white focus:ring-1 focus:ring-[#014162]"
                    />
                  ))}
                </div>
              )}
            />

            {/* Timer Hint */}
            <p className="mt-4 text-[11px] text-gray-400">
              Having trouble? Request a new OTP in <span className="font-medium text-gray-500">00:00</span>
            </p>

            {/* Resend Code Link */}
            <button
              type="button"
              className="mt-2 text-xs font-semibold text-[#1877F2] hover:underline"
              onClick={() => console.log('Resending OTP...')}
            >
              Resend Code
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#003B5C] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#01304a] active:scale-[0.99]"
            >
              Verify
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}