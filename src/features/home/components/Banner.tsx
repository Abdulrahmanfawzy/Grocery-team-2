import DeliveryMan from '../../../assets/Man.png'
import Fruits from '../../../assets/watermelom.png'
import Links from '@/components/ui/Link'

const PromoBanners = () => {
  return (
    <section className="container mx-auto  py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Banner - Free Delivery */}
        <div className="relative bg-[#BCB8B1] rounded-xl overflow-hidden min-h-56 sm:min-h-64 md:min-h-80 flex items-center">
          <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 px-5 sm:px-6 md:px-10 py-6 sm:py-8 w-[62%] sm:w-[58%] md:max-w-[55%] relative z-10">
            <span className="bg-app-main text-white text-[11px] sm:text-xs md:text-sm font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              Free delivery
            </span>
            <h2 className="text-xl sm:text-[28px] md:text-[32px] font-bold leading-tight text-app-linera">
              Free delivery over £50
            </h2>
            <p className="text-sm sm:text-[18px] md:text-base text-app-main font-medium leading-snug">
              Shop £50 product and get free delivery anywhre.{' '}
            </p>
            <Links
              to="/"
              className="bg-app-main mt-4 sm:mt-8 md:mt-12 transition-all text-white duration-300 ease-in-out h-10 sm:h-12 px-5 sm:px-7 rounded-md flex items-center font-bold text-sm sm:text-base hover:bg-app-main hover:text-white"
            >
              Shop Now <span className="ml-1">›</span>
            </Links>
          </div>

          <div className="absolute right-0 bottom-0 top-0 flex items-end justify-end pointer-events-none w-[42%] sm:w-[45%]">
            <img
              src={DeliveryMan}
              alt="Delivery"
              className="h-[85%] sm:h-[90%] md:h-full w-auto max-w-none object-contain object-bottom "
            />
          </div>
        </div>

        {/* Right Banner - Organic Food */}
        <div className="relative bg-app-main rounded-xl overflow-hidden min-h-56 sm:min-h-64 md:min-h-80 flex items-center">
          <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 px-5 sm:px-6 md:px-10 py-6 sm:py-8 w-[62%] sm:w-[58%] md:max-w-[55%] relative z-10">
            <span className="bg-[#D9D9D4] text-[#0B3B5E] text-[11px] sm:text-xs md:text-sm font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
              60% off
            </span>
            <h2 className="text-xl sm:text-[28px] md:text-[32px] font-bold leading-tight text-white">
              Organic Food
            </h2>
            <p className="text-sm sm:text-[18px] md:text-base text-gray-200 font-medium leading-snug">
              Save up to 60% off on your <br className="hidden sm:inline" /> first order{' '}
            </p>
            <Links
              to="/shop"
              className="bg-[#D9D9D4] mt-4 sm:mt-8 md:mt-12 transition-all duration-300 ease-in-out h-10 sm:h-12 px-5 sm:px-7 rounded-md flex items-center text-secondary-foreground font-bold text-sm sm:text-base hover:text-white"
            >
              Shop Now <span className="ml-1">›</span>
            </Links>
          </div>

          <div className="absolute right-0 bottom-0 top-0 flex items-center justify-end pointer-events-none w-[45%] md:w-[42%]">
            <img
              src={Fruits}
              alt="Organic fruits"
              className="h-full object-contain object-right max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanners
