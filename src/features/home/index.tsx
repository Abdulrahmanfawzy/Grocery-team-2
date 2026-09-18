import React from 'react'
import HeroSection from './components/HeroSection';
import HotDeals from './components/HotDeals';
import NewProducts from './components/NewProducts';
import PromoBanners from './components/Banner';
import ProductCard from './components/DailyBest';
import FeaturesSection from './components/FeaturesSection';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-20.5'>
      <HeroSection/>
     <div className='flex flex-col gap-7'>
     <HotDeals title="Hot Deals"/>
     <NewProducts title="New Products"/>
     </div>
     <PromoBanners/>
     <ProductCard title="Daily Best Sells" />
     <FeaturesSection/>
    </div>
  )
}

export default HomePage