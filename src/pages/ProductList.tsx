    import { useProductFilter } from '@/hooks/useProductFilter';
import { SearchIcon } from 'lucide-react';
    import { Link } from 'react-router-dom'; 
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

        function setPriceRange(minPrice: string, value: string): void {
            throw new Error('Function not implemented.');
        }

    return (
        <div className="container mx-auto px-6 py-8">
        {/* Banner Section */}
        <div className="relative h-[60vh] w-full bg-cover bg-center rounded-lg overflow-hidden mb-8">
            <img src="/Banner.jpg" alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#08415F]/80 flex items-center justify-center">
            <h1 className="absolute left-24 top-70 text-white text-3xl font-bold">// Welcome To Our Company</h1>
            <h1 className="absolute left-30 top-84 text-[#08ABFF] text-5xl font-bold">Shop</h1>
            <Link to='/HomePage'><h1 className="absolute right-40 top-89 text-[white] text-sm font-bold">Home</h1></Link>
            <h1 className="absolute right-35 top-89 text-[#08ABFF] text-sm font-bold gap-3">|</h1>
            <Link to='/ProductList'><h1 className="absolute right-24 top-89 text-[#08ABFF] text-sm font-bold">Shop</h1></Link>
            </div>
        </div>

        {/* Main Grid Layout (Sidebar: 25% / Products: 75%) */}
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar for Filters (25%) */}
            <aside className="w-full md:w-1/4 bg-blue-50 p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Categories</h3>
            <ul className="space-y-2 text-gray-600">
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Vegetables' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Vegetables')}
                >
                Vegetables
                </li>
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Fruits' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Fruits')}
                >
                Fruits
                </li>
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Dairy' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Dairy')}
                >
                Dairy & Eggs
                </li>
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Bakery' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Bakery')}
                >
                Bakery
                </li>
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Seafood' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Seafood')}
                >
                Seafood
                </li>
                <li 
                className={`cursor-pointer hover:text-black ${selectedCategory === 'Meats' ? 'font-bold text-primary' : ''}`}
                onClick={() => setCategory('Meats')}
                >
                Meats
                </li>
            </ul>
            <br />
            
            {/* Brands Section */}
            <ul className='space-y-2 text-gray-600 mb-3'>
                <h3 className='font-bold text-black text-lg mb-2'>Brand</h3>
                <li className="flex items-center space-x-2">
    <label className="flex items-center gap-2 cursor-pointer w-full">
        <input 
        type="checkbox"
        checked={selectedBrand === 'Brand A'}
        onChange={(e) => {
            setBrand(e.target.checked ? 'Brand A' : 'all');
        }}
        className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
        />
        <span className={`hover:text-black ${selectedBrand === 'Brand A' ? 'font-bold text-primary' : 'text-gray-600'}`}>
        Brand A
        </span>
    </label>
    </li>
                <li className="flex items-center space-x-2">
    <label className="flex items-center gap-2 cursor-pointer w-full">
        <input 
        type="checkbox"
        checked={selectedBrand === 'Brand B'}
        onChange={(e) => {
            setBrand(e.target.checked ? 'Brand B' : 'all');
        }}
        className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
        />
        <span className={`hover:text-black ${selectedBrand === 'Brand B' ? 'font-bold text-primary' : 'text-gray-600'}`}>
        Brand B
        </span>
    </label>
    </li>
                <li className="flex items-center space-x-2">
    <label className="flex items-center gap-2 cursor-pointer w-full">
        <input 
        type="checkbox"
        checked={selectedBrand === 'Brand C'}
        onChange={(e) => {
            setBrand(e.target.checked ? 'Brand C' : 'all');
        }}
        className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
        />
        <span className={`hover:text-black ${selectedBrand === 'Brand C' ? 'font-bold text-primary' : 'text-gray-600'}`}>
        Brand C
        </span>
    </label>
    </li>
    </ul>

            {/* Product Type Section */}
                <ul className='space-y-2 text-gray-600 mb-3'>
                    <h3 className='font-bold text-black text-lg mb-2'>Product Type</h3>
                    <li className="flex items-center space-x-2">
        <label className="flex items-center gap-2 cursor-pointer w-full">
            <input 
            type="checkbox"
            checked={selectedProductType === 'Fresh'}
            onChange={(e) => {
                setProductType(e.target.checked ? 'Fresh' : 'all');
            }}
            className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span className={`hover:text-black ${selectedProductType === 'Fresh' ? 'font-bold text-primary' : 'text-gray-600'}`}>
            Fresh
            </span>
        </label>
        </li>
                    <li className="flex items-center space-x-2">
        <label className="flex items-center gap-2 cursor-pointer w-full">
            <input 
            type="checkbox"
            checked={selectedProductType === 'Organic'}
            onChange={(e) => {
                setProductType(e.target.checked ? 'Organic' : 'all');
            }}
            className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span className={`hover:text-black ${selectedProductType === 'Organic' ? 'font-bold text-primary' : 'text-gray-600'}`}>
            Organic
            </span>
        </label>
        </li>
                    <li className="flex items-center space-x-2">
        <label className="flex items-center gap-2 cursor-pointer w-full">
            <input 
            type="checkbox"
            checked={selectedProductType === 'Frozen'}
            onChange={(e) => {
                setProductType(e.target.checked ? 'Frozen' : 'all');
            }}
            className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span className={`hover:text-black ${selectedProductType === 'Frozen' ? 'font-bold text-primary' : 'text-gray-600'}`}>
            Frozen
            </span>
        </label>
        </li>
            </ul>
                {/* Available Product Section */}

            <ul className=' space-y-2 text-gray-600 mb-3'>
                <h3 className='font-bold text-black text-lg mb-2'>Available Product</h3>
                <label htmlFor="instock"> 
                <li className="flex items-center space-x-2">
                <input 
                    type="checkbox"
                    checked={availableProduct === 'in stock'}
                    onChange={(e) => {
                    setAvailableProduct(e.target.checked ? 'in stock' : 'out of stock');
                    }}
                    className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer "
                    />
                    <span className={`hover:text-black ${availableProduct === 'in stock' ? 'font-bold text-primary' : 'text-gray-600'}`}>
                    In Stock
                    </span>
                </li>
                </label>
                
                <li className="flex items-center space-x-2">
        <label className="flex items-center gap-2 cursor-pointer w-full">
            <input 
            type="checkbox"
            checked={availableProduct === 'out of stock'}
            onChange={(e) => {
                setAvailableProduct(e.target.checked ? 'out of stock' : 'all');
            }}
            className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span className={`hover:text-black ${availableProduct === 'out of stock' ? 'font-bold text-primary' : 'text-gray-600'}`}>
            Out of Stock
            </span>
        </label>
        </li>
                
            </ul>
            {/* SearchObjects */}
            <h3 className='font-bold text-black text-lg mb-2'>- Search Objects</h3>
            <div className='w-[200px]  h-[60px] flex items-center  rounded-md focus:outline-none focus:border-primary'>
                
           <div className='w-[200px]  h-[50px] bg-[#D9D9D9] item-center justify-center rounded-l-[4px] '>
             <input
  type="text"
  placeholder="Search products..."
  value={searchQuery} 
  onChange={(e) =>  setSearch(e.target.value)} 
  className="w-full  px-4 py-2   focus:outline-none focus:border-primary"
/>

</div>
<div className='search icon w-[40px] h-[50px]  rounded-r-[4px] bg-[#014162] flex items-center justify-center'>
<SearchIcon className='w-[20px] h-[30px] text-white ' />
</div>
</div>
{/* Filter by Price Section */}
          <div className='mt-2'> 
            <h3 className='font-bold text-black text-lg mb-2'>- Filter by Price</h3>
            <div className='flex justify-between text-gray-600 text-sm mb-2'>
              <span>Your range:</span>
              <span className="font-semibold text-black">£{minPrice || 0} - £{maxPrice || 100}</span>
            </div>
            
            {/* مؤشر السعر الأقصى والأدنى */}
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500">Max Price: £{maxPrice || 100}</label>
<input 
  type='range' 
  min={0} 
  max={100} 
  value={maxPrice || 100}
  onChange={(e) => setPriceRange(minPrice, e.target.value)}
  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
/>
              </div>
            </div>
          </div>

        </aside>
                            

                            



            {/* Products Grid Section (75%) */}
<main className="w-full md:w-3/4">
  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col justify-between"
        >
          {/* Image & Tags Section */}
          <div className="relative">
            <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center justify-center rounded bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-2 py-0.5 text-xs font-normal leading-[150%] text-white">
                In Stock
              </span>
              <span className="inline-flex items-center justify-center rounded bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-2 py-0.5 text-xs font-normal leading-[150%] text-white">
                Save 20%
              </span>
              <span className="inline-flex items-center justify-center rounded bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-2 py-0.5 text-xs font-normal leading-[150%] text-white">
                New
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
            
            {/* Price section */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-800 font-bold">£{product.price}</span>
              <span className="text-gray-400 text-sm line-through">£{product.oldPrice || (Number(product.price) + 10).toFixed(1)}</span>
            </div>

            {/* Stars & Rating */}
            <div className="flex items-center gap-1 mt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="h-4 w-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400">(3.8/5)</span>
            </div>
          </div>

          {/* Action Row: Add to Cart on left, Rubbish + Quantity enclosed together in one rounded border on right */}
          <div className="flex items-center justify-between gap-2 mt-2">
            {/* Add To Cart Button */}
            <button className="flex-1 flex items-center justify-center rounded-lg bg-[#014162] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#01304a]">
              Add To Cart
            </button>

            {/* Combined Rubbish and Quantity Container with a single rounded border */}
            <div className="flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 gap-2">
              {/* Rubbish / Delete Button */}
              <button 
                aria-label="Delete" 
                className="flex items-center justify-center text-gray-400 transition hover:text-red-600 px-1"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                  />
                </svg>
              </button>

              <div className="h-4 w-[1px] bg-gray-200" />

              {/* Quantity Counter */}
              <div className="flex items-center gap-4 px-1">
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
        <section className="w-full space-y-8">
      {/* Banner with Countdown */}
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(0deg,rgba(1,65,98,0.5)_-28.12%,rgba(1,65,98,0.8)_30.45%,#014162_87.19%)] px-6 py-12 text-center text-white shadow-lg md:py-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Winter Discount</h2>
        <p className="mt-2 text-sm text-gray-200 md:text-base">Get 60% off - Limited Time Offer</p>

        {/* Countdown Timer */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#014162] shadow md:h-14 md:w-14 md:text-xl">
              02
            </div>
            <span className="mt-1 text-xs text-gray-200">Days</span>
          </div>

          <span className="text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#014162] shadow md:h-14 md:w-14 md:text-xl">
              24
            </div>
            <span className="mt-1 text-xs text-gray-200">Hours</span>
          </div>

          <span className="text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#014162] shadow md:h-14 md:w-14 md:text-xl">
              59
            </div>
            <span className="mt-1 text-xs text-gray-200">Minutes</span>
          </div>

          <span className="text-xl font-bold text-gray-300">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#014162] shadow md:h-14 md:w-14 md:text-xl">
              59
            </div>
            <span className="mt-1 text-xs text-gray-200">Seconds</span>
          </div>
        </div>

        {/* Shop Now Button */}
        <div className="mt-8">
          <button className="inline-flex items-center gap-1 rounded-full bg-[#014162] border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#01304a]">
            Shop now <span className="text-lg leading-none">&gt;</span>
          </button>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Curated Products */}
        <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#014162]/10 text-[#014162]">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Curated Products</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Provide free home delivery for all product over $100</p>
          </div>
        </div>

        {/* Handmade */}
        <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#014162]/10 text-[#014162]">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Handmade</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">WE ensure the product quality that is our main goal</p>
          </div>
        </div>

        {/* Natyral Food */}
        <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#014162]/10 text-[#014162]">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Natyral Food</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Return product witin 3 days for any product you buy</p>
          </div>
        </div>

        {/* Free home delivery */}
        <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#014162]/10 text-[#014162]">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-9l1.96 2.5H17V9.5h2.5zM18 18.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Free home delivery</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">We ensure the product that you can trust easily</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
    }