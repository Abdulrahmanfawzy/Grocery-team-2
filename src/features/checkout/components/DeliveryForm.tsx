import type { UseFormRegister } from 'react-hook-form';
import type { CustomerInfo } from '../types/checkout';

interface Props {
  register: UseFormRegister<CustomerInfo>;
}

export function DeliveryForm({ register }: Props) {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[11px] font-bold text-gray-700">
        Customize Your Delivery
      </h2>

      {/* Address ID - temporary default */}
      <input
        type="hidden"
        {...register('addressId', {
          valueAsNumber: true,
        })}
      />

      {/* Fulfillment Method */}
      <div className="mb-3">
        <label className="field-label">Fulfillment Method</label>

        <div className="grid grid-cols-2 gap-2">
          <label className="delivery-option">
            <input
              {...register('fulfillment')}
              type="radio"
              value="delivery"
            />
            <span>Delivery</span>
          </label>

          <label className="delivery-option">
            <input
              {...register('fulfillment')}
              type="radio"
              value="pickup"
            />
            <span>Pick-Up</span>
          </label>
        </div>
      </div>

      {/* Address */}
      <div className="mb-3">
        <label className="field-label">Address</label>

        <input
          {...register('address')}
          className="field-input"
          placeholder="Villa 14, Street 23, District 5, New Cairo"
        />
      </div>

      {/* City / Province / Postal */}
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="field-label">City</label>
          <input
            {...register('city')}
            className="field-input"
            placeholder="Cairo"
          />
        </div>

        <div>
          <label className="field-label">Province</label>
          <input
            {...register('province')}
            className="field-input"
            placeholder="New Cairo"
          />
        </div>

        <div>
          <label className="field-label">Postal Code</label>
          <input
            {...register('postalCode')}
            className="field-input"
            placeholder="11335"
          />
        </div>
      </div>

      {/* Schedule Delivery */}
      <div className="mt-3">
        <label className="field-label">Schedule Delivery</label>

        <div className="grid grid-cols-2 gap-2">
          <label className="delivery-option">
            <input
              {...register('scheduleDelivery')}
              type="radio"
              value="deliver_now"
            />
            <span>Deliver Now</span>
          </label>

          <label className="delivery-option">
            <input
              {...register('scheduleDelivery')}
              type="radio"
              value="schedule"
            />
            <span>Schedule Later</span>
          </label>
        </div>
      </div>

      {/* Delivery Speed */}
      <div className="mt-3">
        <label className="field-label">Delivery Speed</label>

        <div className="grid grid-cols-2 gap-2">
          <label className="delivery-option">
            <input
              {...register('deliverySpeed')}
              type="radio"
              value="standerd"
            />
            <span>Standard</span>
          </label>

          <label className="delivery-option">
            <input
              {...register('deliverySpeed')}
              type="radio"
              value="priority"
            />
            <span>Priority</span>
          </label>
        </div>
      </div>

      {/* Estimated Arrival */}
      <div className="mt-3">
        <label className="field-label">Estimated Arrival</label>

        <div className="rounded border border-gray-200 bg-gray-50 px-2 py-1.5 text-[9px] text-gray-500">
          45 Min, 30/01/25 at 2:30 PM
        </div>
      </div>
    </section>
  );
}


// import type { UseFormRegister } from 'react-hook-form'
// import type { CustomerInfo } from '../types/checkout'
// import { Car, Clock3, ListClock, RefreshCcw, Truck } from 'lucide-react'

// interface Props {
//   register: UseFormRegister<CustomerInfo>
// }

// export function DeliveryForm({ register }: Props) {
//   return (
//     <section className="rounded-md border border-gray-200 bg-white p-3">
//       <h2 className="mb-3 text-[11px] font-bold text-gray-700">Customize Your Delivery</h2>
//       {/* Fulfillment Method */}
//       <div className="mb-3">
//         <label className="field-label">Fulfillment Method</label>
//         <div className="flex items-center justify-between gap-4">
//           {/* Delivery */}
//           <button
//             type="button"
//             className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//           >
//             <Truck size={22} strokeWidth={1.5} />
//             <span>Delivery</span>
//           </button>

//           {/* Pick-Up */}
//           <button
//             type="button"
//             // onClick={() => setMethod("pickup")}
//             className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//           >
//             <Car size={22} strokeWidth={1.5}  />
//             <span>Pick-Up</span>
//           </button>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="field-label">Address</label>
//         <input
//           {...register('address')}
//           className="field-input"
//           placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11335"
//         />
//       </div>

//       <div className="grid grid-cols-3 gap-2">
//         <div>
//           <label className="field-label">City</label>
//           <input {...register('city')} className="field-input" placeholder="Cairo" />
//         </div>

//         <div>
//           <label className="field-label">Province</label>
//           <input {...register('province')} className="field-input" placeholder="New Cairo" />
//         </div>

//         <div>
//           <label className="field-label">Postal Code</label>
//           <input {...register('postalCode')} className="field-input" placeholder="11335" />
//         </div>
//       </div>
//       {/* Schedule Delivery */}
//       <div className="mt-3">
//         <label className="field-label">Schedule Delivery</label>
//         <div className="flex items-center justify-between gap-4">
//            {/* Now */}
//           <button
//             type="button"
//             className="flex h-11 flex-1 items-center justify-center gap-1 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//           >
//             <RefreshCcw size={22} strokeWidth={1.5} />
//             <span>Deliver Now</span>
//           </button>

//           {/* Later */}
//           <button
//             type="button"
//             className="flex h-11 flex-1 items-center justify-center gap-1 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//           >
//             <Clock3 size={22} strokeWidth={1.5} />
//             <span>Deliver Later</span>
//           </button>
//         </div>
//       </div>
//       {/* Delivery Speed */}
//       <div className="mt-3">
//         <label className="field-label">Delivery Speed</label>
//         <div className="mb-3">
//           <label className="field-label">Fulfillment Method</label>
//           <div className="flex items-center justify-between gap-4">
//             {/* Standard */}
//             <button
//               type="button"
//               className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//             >
//               <Truck size={22} strokeWidth={1.5} />
//               <span>Standard</span>
//             </button>

//             {/* Priority */}
//             <button
//               type="button"
//               className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg px-4 text-base transition-colors bg-[#B8B5B0] text-[#00527A]"
//             >
//               <ListClock size={22} strokeWidth={1.5}  />
//               <span>Priority</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-3">
//         <label className="field-label">Estimated Arrival</label>
//         <div className="rounded border border-gray-200 bg-gray-50 px-2 py-1.5 text-[9px] text-gray-500">
//           45 Min, 30/01/25 at 2:30 PM
//         </div>
//       </div>
//     </section>
//   )
// }
