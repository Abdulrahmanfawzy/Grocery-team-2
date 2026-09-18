import type { CartItemType } from "../types/checkout";

interface Props {
  items: CartItemType[];
}

export function OrderSummary({ items }: Props) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <section className="rounded-md border border-gray-200 bg-white">
      <h2 className="border-b border-gray-100 px-3 py-3 text-[11px] font-bold text-gray-700">
        Order Summary
      </h2>

      <div className="max-h-[230px] overflow-y-auto px-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 border-b border-gray-100 py-2.5 last:border-b-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] text-gray-600">
                {item.name} - {item.description}
              </p>

              <p className="mt-1 text-[10px] font-semibold text-gray-700">
                € {item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-3 py-3">
        <h3 className="mb-2 text-[10px] font-bold text-gray-700">
          Total Amount
        </h3>

        <div className="space-y-1 text-[9px]">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>€ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-400">
            <span>Shipping</span>
            <span>€ {shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-gray-700">
            <span>Total</span>
            <span>€ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}