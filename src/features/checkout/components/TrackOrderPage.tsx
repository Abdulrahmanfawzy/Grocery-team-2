import { initialCart } from '../data/cart';
import { CheckoutLayout } from './CheckoutLayout';
import { DriverInformation } from './DriverInformation';
import { OrderOptions } from './OrderOptions';
import { OrderProgress } from './OrderProgress';
import { OrderSummary } from './OrderSummary';

export function TrackOrderPage() {
  return (
    <CheckoutLayout currentStep="tracking">
      <div className="space-y-5">
        <OrderProgress />

        <DriverInformation />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <OrderSummary items={initialCart} />
          <OrderOptions />
        </div>
      </div>
    </CheckoutLayout>
  );
}