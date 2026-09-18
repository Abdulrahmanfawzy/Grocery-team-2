import type { ReactNode } from 'react';
import { CheckoutBreadcrumb } from './CheckoutBreadcrumb';
import { CheckoutSteps } from './CheckoutSteps';

interface CheckoutLayoutProps {
  children: ReactNode;
  currentStep: 'shipping' | 'payment' | 'tracking';
}

export function CheckoutLayout({
  children,
  currentStep,
}: CheckoutLayoutProps) {
  return (
    <main className="min-h-screen bg-white px-4 py-3 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1000px]">
        <CheckoutBreadcrumb currentStep={currentStep} />
        <CheckoutSteps currentStep={currentStep} />

        {children}
      </div>
    </main>
  );
}