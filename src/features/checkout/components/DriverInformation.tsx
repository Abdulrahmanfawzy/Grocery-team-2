import { MessageSquare, Phone } from 'lucide-react';

export function DriverInformation() {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[10px] font-bold text-gray-700">
        Driver Information
      </h2>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
          <img
            src="/images/driver.png"
            alt="Driver"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold text-gray-700">
            Ahmed Badr
          </p>

          <p className="text-[9px] text-yellow-500">★★★★★</p>

          <p className="text-[8px] text-gray-400">
            Rating 4.8
          </p>

          <p className="mt-1 text-[8px] text-gray-500">
            Phone Number: +20 987 1231
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1 rounded bg-[#005174] px-2 py-1.5 text-[8px] text-white"
          >
            <Phone size={10} />
            Call
          </button>

          <button
            type="button"
            className="flex items-center gap-1 rounded bg-[#005174] px-2 py-1.5 text-[8px] text-white"
          >
            <MessageSquare size={10} />
            Chat
          </button>
        </div>
      </div>

      <div className="mt-4 bg-[#E8E8E8] px-3 py-2.5 text-[8px] text-[#005174]">
        <p className="font-semibold">Our Safety Policy...</p>
        <p className="mt-1 text-[7px] text-gray-500">
          Drivers must adhere to road safety rules and operate
          vehicles with caution to ensure safe and timely deliveries.
        </p>
      </div>
    </section>
  );
}