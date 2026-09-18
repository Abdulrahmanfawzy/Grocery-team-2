import { Download, FileText } from 'lucide-react';

export function OrderOptions() {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[10px] font-bold text-gray-700">
        Order Options
      </h2>

      <label className="field-label">Delivery Address</label>
      <input
        className="field-input mb-3"
        defaultValue="Villa 14, Street 23, District 5, New Cairo, Cairo"
      />

      <label className="field-label">Current Order</label>
      <div className="mb-3 flex gap-2">
        <button
          type="button"
          className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1.5 text-[8px] text-gray-500"
        >
          <Download size={10} />
          Download Receipt
        </button>

        <button
          type="button"
          className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1.5 text-[8px] text-gray-500"
        >
          <FileText size={10} />
          Reorder
        </button>
      </div>

      <label className="field-label">How Was Your Experience?</label>
      <div className="mb-2 text-[14px] text-gray-300">★★★★★</div>

      <input
        className="field-input mb-4"
        placeholder="Write your feedback..."
      />

      <label className="field-label">Special Offer Code</label>
      <input
        className="field-input mb-2"
        placeholder="Offer Code"
      />

      <button
        type="button"
        className="w-full rounded bg-[#005174] py-2 text-[8px] font-semibold text-white"
      >
        Shop Now →
      </button>
    </section>
  );
}