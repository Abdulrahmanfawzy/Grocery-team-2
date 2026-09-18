interface Props {
  currentStep: 'shipping' | 'payment' | 'tracking';
}

const labels = {
  shipping: 'Checkout (Shipping)',
  payment: 'Checkout (Payment)',
  tracking: 'Track Order',
};

export function CheckoutBreadcrumb({ currentStep }: Props) {
  return (
    <div className="mb-5 flex items-center gap-1.5 text-[10px] text-gray-400">
      <span>Home</span>
      <span>/</span>
      <span>Fresh Products</span>
      <span>/</span>
      <span>Shipping</span>
      <span>/</span>
      <span className="font-semibold text-[#004B6B]">
        {labels[currentStep]}
      </span>
    </div>
  );
}

