import {
  Banknote,
  Check,
  CreditCard,
  Plus,
  Smartphone,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';

type PaymentType =
  | 'visa'
  | 'mastercard'
  | 'cash'
  | 'apple'
  | 'google'
  | 'wallet';

export function PaymentMethod() {
  const [selected, setSelected] = useState<PaymentType>('visa');

  const savedCards = [
    {
      id: 'visa',
      name: 'Visa **** 4242',
      details: 'Expires 12/25',
      icon: <CreditCard size={13} />,
    },
    {
      id: 'mastercard',
      name: 'Mastercard **** 8888',
      details: 'Expires 06/26',
      icon: <CreditCard size={13} />,
    },
  ] as const;

  const otherMethods = [
    {
      id: 'cash',
      name: 'Cash on Delivery',
      description: 'Pay when your order arrives',
      icon: <Banknote size={13} />,
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      description: 'Quick checkout with Apple Pay',
      icon: <Smartphone size={13} />,
    },
    {
      id: 'google',
      name: 'Google Pay',
      description: 'Quick checkout with Google Pay',
      icon: <Smartphone size={13} />,
    },
    {
      id: 'wallet',
      name: 'Wallet Pay',
      description: 'Pay using your wallet',
      icon: <Wallet size={13} />,
    },
  ] as const;

  return (
    <section className="rounded-md border border-gray-200 bg-white p-3">
      <h2 className="mb-3 text-[11px] font-bold text-gray-700">
        Payment Method
      </h2>

      {/* Secure Checkout */}
      <div className="mb-6 flex items-start gap-2 bg-[#E8E8E8] px-3 py-2.5 text-[8px] text-[#005174]">
        <Check size={11} className="mt-0.5 shrink-0" />

        <div>
          <p className="font-semibold">Secure Checkout</p>
          <p className="mt-1 text-[7px] text-gray-500">
            Your information is encrypted and secure. We never store
            your full card details.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Saved Cards */}
        <div>
          <h3 className="mb-2 text-[9px] font-bold text-gray-700">
            Saved Cards
          </h3>

          <div className="space-y-2">
            {savedCards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelected(card.id)}
                className={`flex w-full items-center gap-2 rounded border p-2 text-left transition ${
                  selected === card.id
                    ? 'border-[#005174] bg-[#F3F8FA]'
                    : 'border-gray-200'
                }`}
              >
                <span className="text-[#005174]">{card.icon}</span>

                <span className="flex-1">
                  <span className="block text-[9px] text-gray-600">
                    {card.name}
                  </span>
                  <span className="block text-[7px] text-gray-400">
                    {card.details}
                  </span>
                </span>

                {selected === card.id && (
                  <Check size={11} className="text-[#005174]" />
                )}
              </button>
            ))}

            <button
              type="button"
              className="flex w-full items-center justify-center gap-1 rounded border border-dashed border-gray-300 py-2 text-[8px] text-gray-500"
            >
              <Plus size={10} />
              Add New Card
            </button>
          </div>

          {/* Promo */}
          <div className="mt-5">
            <h3 className="mb-2 text-[9px] font-bold text-gray-700">
              Promo Code
            </h3>

            <div className="flex gap-1.5">
              <input
                className="field-input"
                placeholder="SAVE10"
              />
              <button
                type="button"
                className="rounded bg-gray-300 px-2 text-[8px] text-gray-600"
              >
                Apply Code
              </button>
            </div>
          </div>
        </div>

        {/* Other Payment Methods */}
        <div>
          <h3 className="mb-2 text-[9px] font-bold text-gray-700">
            Other Payment Methods
          </h3>

          <div className="space-y-2">
            {otherMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelected(method.id)}
                className={`flex w-full items-center gap-2 rounded border p-2 text-left ${
                  selected === method.id
                    ? 'border-[#005174] bg-[#F3F8FA]'
                    : 'border-gray-200'
                }`}
              >
                <span className="text-[#4C9B70]">{method.icon}</span>

                <span className="flex-1">
                  <span className="block text-[9px] text-gray-600">
                    {method.name}
                  </span>
                  <span className="block text-[7px] text-gray-400">
                    {method.description}
                  </span>
                </span>

                {selected === method.id && (
                  <Check size={11} className="text-[#005174]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}