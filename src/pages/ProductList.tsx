    import { useProductFilter } from '@/hooks/useProductFilter';
    import { SearchIcon } from 'lucide-react';
    import { Link } from 'react-router-dom'; 
    import { useState, useEffect } from 'react';
    // 1. Mock Data تجريبية
    const MOCK_PRODUCTS = [
    { id: 1, name: 'Fresh Peach', category: 'Vegetables', price: 32, image: '/Banner.jpg', brand: 'Brand A' , productType: 'Fresh' , availableProduct: 'in stock'   },
    { id: 2, name: 'Organic Pineapple', category: 'Fruits', price: 45, image: '/Banner.jpg', brand: 'Brand B' , productType: 'Organic' , availableProduct: 'out of stock'  },
    { id: 3, name: 'Fresh Broccoli', category: 'Vegetables', price: 20, image: '/Banner.jpg', brand: 'Brand C' , productType: 'frozen' , availableProduct: 'in stock'  },
    { id: 4, name: 'Fresh Milk', category: 'Dairy', price: 15, image: '/Banner.jpg', brand: 'Brand A'  , productType: 'Fresh' , availableProduct: 'out of stock'  },
    ];

    export default function ProductList() {
    const { searchQuery, selectedCategory, selectedBrand, selectedProductType, setCategory, setBrand, setProductType, availableProduct, setAvailableProduct , setSearch,  minPrice, maxPrice } = useProductFilter();
    
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBrand = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();
        const matchesProductType = selectedProductType === 'all' || product.productType.toLowerCase() === selectedProductType.toLowerCase();
        const matchesAvailableProduct = availableProduct === 'all' || product.availableProduct.toLowerCase() === availableProduct.toLowerCase();
        const min = minPrice ? Number(minPrice) : 0;
        const max = maxPrice ? Number(maxPrice) : Infinity;
        const matchesPrice = product.price >= min && product.price <= max;
        return matchesCategory && matchesSearch && matchesBrand && matchesProductType && matchesAvailableProduct && matchesPrice;
    });
    const targetDate = new Date('2026-12-31T23:59:59').getTime();
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // دالة بسيطة عشان لو الرقم أقل من 10 تزود قبله صفر (مثلاً 9 تبقى 09)
  const formatNumber = (num: number) => String(num).padStart(2, '0');



return (
    <div className="container mx-auto px-4 sm:px-6 py-8 overflow-x-hidden">
      
      {/* Banner Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full bg-cover bg-center rounded-lg overflow-hidden mb-8">
        <img src="/Banner.jpg" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#08415F]/80 flex flex-col items-center justify-center text-center px-4">
          <h1 className="absolute top-80 left-70 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            // Welcome To Our Company
          </h1>
          <h1 className="absolute top-90 left-20 text-[#08ABFF] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Shop
          </h1>
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Link to='/HomePage' className=" absolute top-95 right-50 hover:text-[#08ABFF] transition">Home</Link>
            <span className=" absolute top-95 right-43 text-[#08ABFF]">|</span>
            <Link to='/ProductList' className=" absolute top-95 right-30 text-[#08ABFF]">Shop</Link>
          </div>
        </div>
      </div>

      {/* Main Grid Layout (Sidebar: 25% / Products: 75%) */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar for Filters */}
        <aside className="w-full lg:w-1/4 bg-blue-200/10 p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-2">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            {['Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Seafood', 'Meats'].map((cat) => (
              <li 
                key={cat}
                className={`cursor-pointer hover:text-black transition-all ${selectedCategory === cat ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray-200" />
          
          {/* Brands Section */}
          <div className='space-y-2 text-gray-600 mb-3'>
            <h3 className='font-bold text-black text-lg mb-2'>Brand</h3>
            {['Brand A', 'Brand B', 'Brand C'].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer w-full">
                <input 
                  type="checkbox"
                  checked={selectedBrand === brand}
                  onChange={(e) => setBrand(e.target.checked ? brand : 'all')}
                  className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                />
                <span className={`hover:text-black ${selectedBrand === brand ? 'font-bold text-primary' : 'text-gray-600'}`}>
                  {brand}
                </span>
              </label>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />

          {/* Product Type Section */}
          <div className='space-y-2 text-gray-600 mb-3'>
            <h3 className='font-bold text-black text-lg mb-2'>Product Type</h3>
            {['Fresh', 'Organic', 'Frozen'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer w-full">
                <input 
                  type="checkbox"
                  checked={selectedProductType === type}
                  onChange={(e) => setProductType(e.target.checked ? type : 'all')}
                  className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                />
                <span className={`hover:text-black ${selectedProductType === type ? 'font-bold text-primary' : 'text-gray-600'}`}>
                  {type}
                </span>
              </label>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />

          {/* Available Product Section */}
          <div className='space-y-2 text-gray-600 mb-3'>
            <h3 className='font-bold text-black text-lg mb-2'>Available Product</h3>
            <label className="flex items-center gap-2 cursor-pointer w-full">
              <input 
                type="checkbox"
                checked={availableProduct === 'in stock'}
                onChange={(e) => setAvailableProduct(e.target.checked ? 'in stock' : 'all')}
                className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <span className={`hover:text-black ${availableProduct === 'in stock' ? 'font-bold text-primary' : 'text-gray-600'}`}>
                In Stock
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer w-full">
              <input 
                type="checkbox"
                checked={availableProduct === 'out of stock'}
                onChange={(e) => setAvailableProduct(e.target.checked ? 'out of stock' : 'all')}
                className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <span className={`hover:text-black ${availableProduct === 'out of stock' ? 'font-bold text-primary' : 'text-gray-600'}`}>
                Out of Stock
              </span>
            </label>
          </div>
          <hr className="my-4 border-gray-200" />

          {/* SearchObjects */}
          <h3 className='font-bold text-black text-lg mb-2'>Search Objects</h3>
          <div className='w-full flex items-center rounded-md'>
            <div className='w-full h-[45px] bg-[#D9D9D9] flex items-center rounded-l-md px-3'>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery} 
                onChange={(e) => setSearch(e.target.value)} 
                className="w-full bg-transparent focus:outline-none text-sm"
              />
            </div>
            <div className='search-icon w-[50px] h-[45px] rounded-r-md bg-primary flex items-center justify-center shrink-0 cursor-pointer'>
              {/* استبدل الـ SVG لو مش عندك الـ SearchIcon */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <hr className="my-4 border-gray-200" />

          {/* Filter by Price Section */}
          <div> 
            <h3 className='font-bold text-black text-lg mb-2'>Filter by Price</h3>
            <div className='flex justify-between text-gray-600 text-sm mb-2'>
              <span>Your range:</span>
              <span className="font-semibold text-black">£{minPrice} - £{maxPrice}</span>
            </div>
            <div className="space-y-3">
              <input 
                type='range' 
                min={0} 
                max={100} 
                value={maxPrice}
                onChange={(e) => setPriceRange(minPrice, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
              />
            </div>
          </div>
        </aside>

        {/* Products Grid Section */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col justify-between"
                >
                  {/* Image & Tags Section */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center justify-center rounded bg-[#014162] px-2 py-0.5 text-xs font-normal text-white">
                        In Stock
                      </span>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="my-3">
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <h3 className="font-semibold text-gray-800 mt-1">{product.name}</h3>
                    
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-800 font-bold">£{product.price}</span>
                      <span className="text-gray-400 text-sm line-through">£{product.oldPrice}</span>
                    </div>

                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex items-center text-amber-400">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">(3.8/5)</span>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <button className="flex-1 flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-[#01304a]">
                      Add To Cart
                    </button>

                    <div className="flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 gap-2">
                      <button aria-label="Delete" className="text-gray-400 hover:text-red-600 px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6l1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <div className="h-4 w-[1px] bg-gray-200" />
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-sm font-medium text-gray-700">1</span>
                        <button className="text-gray-400 hover:text-black">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10">No products found matching your filter.</p>
            )}
          </div>
        </main>
      </div>

      {/* Banner & Features Section */}
      <section className="w-full space-y-8 mt-12 sm:mt-16">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-6 py-12 text-center text-white shadow-lg md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Winter Discount</h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">Get 60% off - Limited Time Offer</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
                {formatNumber(timeLeft.days)}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Days</span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Hours</span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Minutes</span>
            </div>

            <span className="text-lg sm:text-xl font-bold text-gray-300">:</span>

            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-base sm:text-xl font-bold text-[#014162] shadow">
                {formatNumber(timeLeft.seconds)}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs text-gray-200">Seconds</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="inline-flex items-center gap-1 rounded-full bg-[#014162] border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#01304a]"><Link to='/HomePage' >
              Shop now <span className="text-lg leading-none">&gt;</span></Link>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Curated Products', desc: 'Provide free home delivery for all product over $100' },
            { title: 'Handmade', desc: 'WE ensure the product quality that is our main goal' },
            { title: 'Natural Food', desc: 'Return product within 3 days for any product you buy' },
            { title: 'Free home delivery', desc: 'We ensure the product that you can trust easily' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#014162]/10 text-[#014162]">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
    }