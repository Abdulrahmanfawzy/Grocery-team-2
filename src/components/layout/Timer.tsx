import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Timer = () => {
  const targetDate = new Date('2026-12-31T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // لازم يكون فيه return هنا قبل الـ JSX
  return (
    <section className="w-full space-y-8 mt-12 sm:mt-16">
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-6 py-12 text-center text-white shadow-lg md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Winter Discount</h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Get 60% off - Limited Time Offer</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
              {formatNumber(timeLeft.days)}
            </div>
            <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Days</span>
          </div>

          <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
              {formatNumber(timeLeft.hours)}
            </div>
            <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Hours</span>
          </div>

          <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
              {formatNumber(timeLeft.minutes)}
            </div>
            <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Minutes</span>
          </div>

          <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
              {formatNumber(timeLeft.seconds)}
            </div>
            <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Seconds</span>
          </div>
        </div>

        <div className="mt-8">
          <Link to='/HomePage' className="inline-flex items-center gap-1 rounded-full bg-[#014162] border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#01304a]">
            Shop now <span className="text-lg leading-none">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};