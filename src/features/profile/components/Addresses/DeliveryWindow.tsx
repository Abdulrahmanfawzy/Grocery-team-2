import { Clock, Check } from "lucide-react";
import type { IDeliveryWindowProps } from "../../types/deliveryWindow.types";


const DeliveryWindow = ({
  title = "Preferred Delivery Windows",
  description = "Select your preferred time slots for deliveries",
  options,
  selectedIds,
  onChange,
  multiple = true,
}: IDeliveryWindowProps) => {
  const handleSelect = (id: string) => {
    if (multiple) {
      const isSelected = selectedIds.includes(id);

      if (isSelected) {
        onChange(selectedIds.filter((item) => item !== id));
      } else {
        onChange([...selectedIds, id]);
      }

      return;
    }

    onChange([id]);
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-6 mt-14">
      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00496B]">
          <Clock  className="h-7 w-7 text-white" strokeWidth={2} />
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-900">
            {title}
          </h2>

          <p className="mt-4 text-base text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4 pl-0 sm:grid-cols-3">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              className={`
                relative flex h-23.5 flex-col items-start justify-center
                rounded-lg border px-6 text-left
                transition-all duration-200
                ${
                  isSelected
                    ? "border-[#00517A] bg-white"
                    : "border-transparent bg-[#F6FAFC] hover:border-[#00517A]/40"
                }
              `}
            >
              {/* Title */}
              <span className="text-base font-medium text-[#00517A]">
                {option.title}
              </span>

              {/* Time */}
              <span className="mt-2 text-xs text-gray-800">
                {option.time}
              </span>

              {/* Check */}
              {isSelected && (
                <span className="absolute right-3 top-6 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#00517A]">
                  <Check
                    className="h-3 w-3 text-[#00517A]"
                    strokeWidth={2}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryWindow;