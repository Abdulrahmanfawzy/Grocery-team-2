import type { UseFormRegister } from 'react-hook-form';
import type { CustomerInfo } from '../types/checkout';

interface Props {
  register: UseFormRegister<CustomerInfo>;
}

export function ContactInformation({ register }: Props) {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[11px] font-bold text-gray-700">
        Contact Information
      </h2>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="field-label">First Name</label>
          <input
            {...register('firstName')}
            className="field-input"
            placeholder="Sarah"
          />
        </div>

        <div>
          <label className="field-label">Last Name</label>
          <input
            {...register('lastName')}
            className="field-input"
            placeholder="Emad"
          />
        </div>
      </div>

      <div className="mt-2">
        <label className="field-label">Phone Number</label>
        <input
          {...register('phone')}
          className="field-input"
          placeholder="01012345678"
        />
      </div>

      <div className="mt-2">
        <label className="field-label">Email</label>
        <input
          {...register('email')}
          type="email"
          className="field-input"
          placeholder="sarah@gmail.com"
        />
      </div>

      <label className="mt-2 flex items-center gap-1 text-[8px] text-gray-400">
        <input
          {...register('saveInfo')}
          type="checkbox"
          className="h-2.5 w-2.5 accent-[#005174]"
        />
        Create an account for easier check-out next time
      </label>
    </section>
  );
}