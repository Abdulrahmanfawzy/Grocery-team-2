import { Filter, X, Search as SearchIcon } from 'lucide-react';

interface ProductFilterSidebarProps {
  selectedCategory: string;
  setCategory: (category: string) => void;
  selectedBrand: string;
  setBrand: (brand: string) => void;
  selectedProductType: string;
  setProductType: (productType: string) => void;
  availableProduct: string;
  setAvailableProduct: (status: string) => void;
  searchQuery: string;
  setSearch: (query: string) => void;
  minPrice: number;
  maxPrice: number;
  setPriceRange: (min: number, max: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductFilterSidebar({
  selectedCategory,
  setCategory,
  selectedBrand,
  setBrand,
  selectedProductType,
  setProductType,
  availableProduct,
  setAvailableProduct,
  searchQuery,
  setSearch,
  minPrice,
  maxPrice,
  setPriceRange,
  isOpen,
  onClose,
}: ProductFilterSidebarProps) {
    return (
        <>
            <div className={`
                fixed inset-0 z-50 bg-app-primary transition-opacity lg:hidden
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `} onClick={onClose} />

            <aside className={`
                fixed lg:static top-0 left-0 z-50 h-full lg:h-auto w-80 lg:w-full 
                bg-white lg:bg-blue-200/10 p-4 sm:p-6 shadow-lg lg:shadow-sm border border-gray-100 
                overflow-y-auto transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between lg:hidden mb-4 pb-2 border-b border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900">Filters</h3>
                    <button 
                        onClick={onClose}
                        className="p-1 rounded-md text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Categories */}
                <h3 className="font-bold text-lg mb-2">Categories</h3>
                <ul className="space-y-2 text-gray-600">
                    {['Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Seafood', 'Meats'].map((cat) => (
                        <li 
                            key={cat}
                            className={`cursor-pointer hover:text-black transition-all ${selectedCategory === cat ? 'font-bold text-primary' : ''}`}
                            onClick={() => {
                                setCategory(cat);
                                onClose();
                            }}
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
                    <div className='search-icon w-[50px] h-[45px] rounded-r-md bg-app-primary flex items-center justify-center shrink-0 cursor-pointer'>
                        <SearchIcon className="w-5 h-5 text-white" />
                    </div>
                </div>
                <hr className="my-4 border-gray-200" />

                {/* Filter by Price Section */}
<div> 
    <div className='flex items-center gap-2 mb-2'>
        <span className='w-3 h-0.5 bg-black'></span>
        <h3 className='font-bold text-black text-lg'>Filter By Price</h3>
    </div>
    <div className='flex justify-between items-center text-gray-800 text-sm mb-4'>
        <span>Your range:</span>
        <span className="font-bold text-black text-base">£{minPrice} - £{maxPrice}</span>
    </div>
    <div className="relative flex items-center h-6 w-full">
        {/* Background Track */}
        <div className="absolute w-full h-1.5 bg-gray-200 rounded-lg"></div>
        
        {/* Min Range Input */}
        <input 
            type='range' 
            min={0} 
            max={1000} 
            value={minPrice}
            onChange={(e) => {
                const value = Number(e.target.value);
                if (value <= maxPrice) {
                    setPriceRange(value, maxPrice);
                }
            }}
            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none accent-[#08415F] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#08415F] [&::-webkit-slider-thumb]:cursor-pointer z-20"
        />
        
        {/* Max Range Input */}
        <input 
            type='range' 
            min={0} 
            max={1000} 
            value={maxPrice}
            onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= minPrice) {
                    setPriceRange(minPrice, value);
                }
            }}
            className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none accent-[#08415F] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#08415F] [&::-webkit-slider-thumb]:cursor-pointer z-30"
        />
    </div>
</div>
            </aside>
        </>
    );
}