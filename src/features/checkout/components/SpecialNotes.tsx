import type { UseFormRegister } from 'react-hook-form';
import type { CustomerInfo } from '../types/checkout';

interface Props {
  register: UseFormRegister<CustomerInfo>;
}

export function SpecialNotes({ register }: Props) {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[10px] font-bold text-gray-700">
        Special Notes
      </h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <input
          {...register('notes')}
          className="field-input"
          placeholder="Leave order in front of The Door"
        />

        <input
          className="field-input"
          placeholder="Don't Ring Bell"
        />

        <input
          className="field-input"
          placeholder="Call 30 min in Advance"
        />
      </div>

      <input
        className="field-input mt-2"
        placeholder="Input Text ...................."
      />
    </section>
  );
}