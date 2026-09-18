import {
  Check,
  Circle,
  Package,
  Truck,
} from 'lucide-react';

const statuses = [
  { label: 'Order Placed', icon: Check },
  { label: 'Processing', icon: Package },
  { label: 'Shipped', icon: Package },
  { label: 'Out for Delivery', icon: Truck },
  { label: 'Delivered', icon: Circle },
];

export function OrderProgress() {
  const currentIndex = 3;

  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[10px] font-bold text-gray-700">
        Track Your Order
      </h2>

      <div className="mb-5 flex items-start justify-between text-[8px]">
        <div>
          <p className="text-gray-500">Current Status</p>
          <p className="font-semibold text-[#005174]">
            Out for Delivery
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-500">Estimated Delivery</p>
          <p className="font-semibold text-gray-600">Today, Nov 4</p>
        </div>
      </div>

      <div className="relative px-2">
        {/* Line */}
        <div className="absolute left-[8%] right-[8%] top-3 h-0.5 bg-gray-200" />

        <div
          className="absolute left-[8%] top-3 h-0.5 bg-[#005174]"
          style={{ width: '68%' }}
        />

        <div className="relative flex justify-between">
          {statuses.map((status, index) => {
            const Icon = status.icon;
            const completed = index <= currentIndex;

            return (
              <div
                key={status.label}
                className="flex w-[20%] flex-col items-center text-center"
              >
                <div
                  className={`z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    completed
                      ? 'border-[#005174] bg-[#005174] text-white'
                      : 'border-gray-300 bg-white text-gray-300'
                  }`}
                >
                  <Icon size={11} />
                </div>

                <span
                  className={`mt-2 text-[7px] leading-3 ${
                    completed
                      ? 'font-semibold text-[#005174]'
                      : 'text-gray-400'
                  }`}
                >
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}