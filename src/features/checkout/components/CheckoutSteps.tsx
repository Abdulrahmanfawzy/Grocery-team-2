import { Check } from 'lucide-react';

type Step = 'shipping' | 'payment' | 'tracking';

interface Props {
  currentStep: Step;
}

const steps = [
  { key: 'shipping', label: 'Shipping' },
  { key: 'payment', label: 'Payment' },
  { key: 'tracking', label: 'Confirmed & Tracking' },
] as const;

export function CheckoutSteps({ currentStep }: Props) {
  const currentIndex = steps.findIndex(
    (step) => step.key === currentStep,
  );

  return (
    <div className="mx-auto mb-8 flex max-w-[330px] items-start">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step.key} className="flex flex-1 items-start">
            <div className="flex min-w-0 flex-col items-center">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold ${
                  isCompleted || isActive
                    ? 'bg-[#005174] text-white'
                    : 'bg-gray-300 text-white'
                }`}
              >
                {isCompleted ? <Check size={11} /> : index + 1}
              </div>

              <span
                className={`mt-1.5 whitespace-nowrap text-[8px] ${
                  isActive
                    ? 'font-semibold text-[#005174]'
                    : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mt-[9px] h-px flex-1 ${
                  index < currentIndex
                    ? 'bg-[#005174]'
                    : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}