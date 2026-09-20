import type { PaymentMethodData } from "../../types/payment.types";

interface PaymentMethodCardProps {
  method: PaymentMethodData;
  onClick?: (id: number) => void;
  isSelected?: boolean;
}

const PaymentMethodCard = ({
  method,
  onClick,
  isSelected = false,
}: PaymentMethodCardProps) => {


  return (
    <button
      type="button"
      onClick={() => onClick?.(method.id)}
      className={`
        flex min-h-16 w-full items-center gap-3
        rounded-lg border bg-white
        px-3
        text-left
        transition-all duration-200
        ${
          isSelected
            ? "border-[#014162] shadow-sm"
            : "border-[#E5E7EB] hover:border-[#014162]/50"
        }
      `}
    >
    <img
  src={method.image}
  alt={method.title}
  className="h-7 w-7 shrink-0 object-contain"
/>

      <div className="min-w-0">
        <p className="text-[12px] font-medium text-[#111827]">
          {method.title}
        </p>

        <p className="mt-0.5 truncate text-[9px] text-[#9CA3AF]">
          {method.description}
        </p>
      </div>
    </button>
  );
};

export default PaymentMethodCard;