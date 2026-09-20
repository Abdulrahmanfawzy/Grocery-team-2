import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 4,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="my-12 flex h-[318px] w-full flex-col items-center justify-center rounded-lg bg-[#014162] px-6 py-8 text-center text-white shadow-sm">
      {/* Title */}
      <h3 className="text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl">
        Winter Discount
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-sm text-gray-300 sm:text-base">
        Get 60% off - Limited Time Offer
      </p>

      {/* Timer Circles */}
      <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            {/* White Circular Card */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-bold text-[#014162] shadow-sm sm:h-14 sm:w-14 sm:text-lg">
              {String(unit.value).padStart(2, "0")}
            </div>

            {/* Unit Label */}
            <span className="mt-2 text-xs font-normal text-gray-200">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        type="button"
        className="mt-6 flex items-center gap-1.5 rounded-lg bg-[#002D45] px-6 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#002033]"
      >
        <span>Shop now</span>
        <span className="text-xs">&gt;</span>
      </button>
    </div>
  );
}