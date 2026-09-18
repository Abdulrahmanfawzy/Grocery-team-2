import HeroOrganicImage from "@/assets/HeroOrganic.png";
const HeroOrganic  = () => {
    return (
      <section className="w-full bg-white">
        <div className="px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 py-10 md:py-16">
            {/* Image side */}
            <div className="relative flex justify-center md:justify-start order-1">
              <img
              src={HeroOrganicImage}
                alt="Fresh organic vegetables including tomatoes, peppers, eggplant, cucumber and garlic"
                className="w-full max-w-sm md:max-w-md object-contain"
              />
  
              {/* Discount badge */}
              <div className="absolute top-0 right-6 md:right-6 flex h-20 w-20 md:h-24 md:w-24 flex-col items-center justify-center rounded-full bg-[#0f3057] text-center leading-tight text-white shadow-md">
                <span className="text-xs md:text-sm">Up to</span>
                <span className="text-sm md:text-base font-semibold">30% off</span>
              </div>
            </div>
  
            {/* Content side */}
            <div className="order-2 text-center md:text-left">
              <h1 className="text-3xl  sm:text-4xl lg:text-[2.75rem] lg:w-5xl font-normal text-neutral-900 leading-tight">
                Organic Vegetables Everyday
              </h1>
  
              <p className="mt-3 text-lg md:text-xl text-[#3f6fa8]">
                Your online resource of healthy recipes.
              </p>
  
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mx-auto md:mx-0">
                Lorem ipsum dolor sit amet consectetur. Bibendum et volutpat
                vitae nullam aenean tortor dolor eget ipsum. Tincidunt sem sem
                convallis ut vestibulum sed. Nulla ultrices consectetur in
                sapien pellentesque aenean sagittis lectus quam. Sodales hac
                mauris eget phasellus tortor elit.
              </p>
  
              <button className="mt-6 rounded-md bg-[#0f3057] px-6 py-2.5 text-sm md:text-base font-medium text-white transition-colors hover:bg-[#0c2645]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroOrganic