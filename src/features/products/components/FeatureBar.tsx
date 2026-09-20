import { Star, CheckCheck, BadgeCheck, Truck } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Curated Products",
    description: "Provide free home delivery for all product over $100",
  },
  {
    icon: CheckCheck,
    title: "Handmade",
    description: "We ensure the product quality that is our main goal",
  },
  {
    icon: BadgeCheck,
    title: "Natural Food",
    description:
      "Return product within 3 days for any product you buy",
  },
  {
    icon: Truck,
    title: "Free home delivery",
    description:
      "We ensure the product that you can trust easily",
  },
];

export default function FeaturesBar() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          flex w-full max-w-[1352px]
          flex-col
          rounded-sm
          bg-white
          sm:flex-row
        "
      >
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`
                flex flex-1 items-center gap-4
                px-5 py-5
                sm:px-4 lg:px-5
                ${index !== benefits.length - 1
                  ? "border-b border-[#E5E5E5] sm:border-b-0 sm:border-r"
                  : ""}
              `}
            >
              {/* Icon */}
              <div className="flex shrink-0 items-center justify-center text-[#014162]">
                <Icon
                  size={34}
                  strokeWidth={2.5}
                  className="sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#111111] lg:text-base">
                  {benefit.title}
                </h3>

                <p className="mt-1 max-w-[220px] text-[11px] font-medium leading-4 text-[#222222] lg:text-xs">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}