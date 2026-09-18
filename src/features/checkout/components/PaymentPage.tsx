import { useNavigate } from 'react-router-dom';

import { CheckoutLayout } from './CheckoutLayout';
import { PaymentMethod } from './PaymentMethod';
import { OrderSummary } from './OrderSummary';
import { initialCart } from '../data/cart';

export function PaymentPage() {
  const navigate = useNavigate();

  return (
    <CheckoutLayout currentStep="payment">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        {/* Payment */}
        <PaymentMethod />

        {/* Summary + Billing */}
        <div className="space-y-5">
          <OrderSummary items={initialCart} />

          <section className="rounded-md border border-gray-200 bg-white p-3">
            <h2 className="mb-3 text-[10px] font-bold text-gray-700">
              Billing Address
            </h2>

            <label className="mb-3 flex items-center gap-1.5 text-[8px] text-gray-400">
              <input
                type="checkbox"
                defaultChecked
                className="h-2.5 w-2.5 accent-[#005174]"
              />
              Billing address same as delivery address
            </label>

            <div className="rounded bg-gray-100 p-2 text-[8px] leading-4 text-gray-500">
              <p className="font-semibold text-gray-600">
                Billing address will be:
              </p>
              Villa 14, Street 23, District 5, New Cairo, Cairo 11335
            </div>
          </section>
        </div>
      </div>

      <div className="mt-5 flex justify-center lg:justify-start">
        <button
          type="button"
          onClick={() => navigate('/checkout/tracking')}
          className="w-full rounded bg-[#005174] px-8 py-2 text-[9px] font-semibold text-white transition hover:bg-[#003D58] sm:w-auto"
        >
          Confirm Payment & Go to Checkout
        </button>
      </div>
    </CheckoutLayout>
  );
}