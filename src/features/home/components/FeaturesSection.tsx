import PriceTag from '../../../assets/DollarSign.svg'
import Refundable from '../../../assets/Refund.svg'
import FreeDelivery from '../../../assets/Car.svg'

const features = [
  {
    icon: PriceTag,
    title: 'Best Prices & Deals',
    description: "Don't miss our daily amazing deals and prices",
  },
  {
    icon: Refundable,
    title: 'Refundable',
    description: 'If your items have damage we agree to refund it',
  },
  {
    icon: FreeDelivery,
    title: 'Free delivery',
    description: 'Do purchase over $50 and get free delivery anywhere',
  },
]

const FeaturesSection = () => {
  return (
    <section className="border-b max-w-[85%] mx-auto border-gray-200">
      <div className="mx-auto w-full py-6 sm:py-8 md:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 sm:items-center sm:gap-4"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 md:h-12 md:w-12"
              />
              <div className="flex flex-col gap-1 sm:gap-1">
                <h3 className="text-app-linera text-base font-bold sm:text-[17px] md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm w-fit leading-snug text-gray-400 sm:text-[15px] md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection