import Vegt from '../../../assets/Vegt.png'
import Hero from '../../../assets/Hero.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-[#014162F2] bg-blend-multiply   md:h-[50vh] overflow-hidden"
      style={{ backgroundImage: `url(${Vegt})` }}
    >
      <div className="container  max-w-[85%] mx-auto h-full flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between relative z-10 px-4 md:px-6 py-10 md:py-0 gap-8 md:gap-0">
        <div className=" flex flex-col   items-start gap-7  text-white justify-center h-full ">
          <h1 className="text-[32px] md:text-[55px] font-bold leading-[110%] md:leading-[100%]">
            Don’t miss our daily <br /> amazing deals.
          </h1>
          <p className="text-[16px] md:text-[20px] font-bold">
            Save up to 60% off on your first order
          </p>
          <Link
            to={'/shop'}
            className="bg-[#D9D9D9] transition-all duration-300 ease-in-out h-12 px-18.75 rounded-md flex items-center  text-secondary-foreground font-bold text-base hover:bg-app-main hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 top-0 sm:flex items-center justify-end pointer-events-none hidden md:opacity-100">
        <img src={Hero} alt="Hero" className="h-full object-contain max-w-none" />
      </div>
      
    </section>
  )
}

export default HeroSection
