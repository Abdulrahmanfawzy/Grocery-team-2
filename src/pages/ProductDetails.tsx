import { useParams, Link } from 'react-router-dom';
import { ShoppingCart , ChevronRight , Heart } from 'lucide-react';

export default function ProductDetails() {
  // Extract the product ID parameter from the URL path
  const { id } = useParams();

  // Array of mock product objects used to simulate a database query
  const MOCK_PRODUCTS = [
    { id: 1, name: 'Fresh Peach', category: 'Vegetables', price: 32, oldPrice: 45, image: '/Banner.jpg', brand: 'Brand A', productType: 'Fresh', availableProduct: 'in stock', image2: '/Banner.jpg', image3: '/Banner.jpg' },
    { id: 2, name: 'Organic Pineapple', category: 'Fruits', price: 45, oldPrice: 60, image: '/Banner.jpg', brand: 'Brand B', productType: 'Organic', availableProduct: 'out of stock', image2: '/Banner.jpg', image3: '/Banner.jpg' },
    { id: 3, name: 'Fresh Broccoli', category: 'Vegetables', price: 20, oldPrice: 30, image: '/Banner.jpg', brand: 'Brand C', productType: 'frozen', availableProduct: 'in stock', image2: '/Banner.jpg', image3: '/Banner.jpg' },
    { id: 4, name: 'Fresh Milk', category: 'Dairy', price: 15, oldPrice: 22, image: '/Banner.jpg', brand: 'Brand A', productType: 'Fresh', availableProduct: 'out of stock', image2: '/Banner.jpg', image3: '/Banner.jpg' },
  ];

  // Find the matching product in the mock array based on the route ID
  const product = MOCK_PRODUCTS.find((p) => p.id === Number(id));

  // Render a fallback error message if the product cannot be found
  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        {/* Link button to return users back to the product listing */}
        <Link to="/ProductList" className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-lg">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 bg-white">
      
      {/* Breadcrumb links for navigation mapping */}
      <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link to="/HomePage" className="hover:text-primary">Home</Link>
        <span>&gt;</span>
        <Link to="/ProductList" className="hover:text-primary">Shop</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">{product.name}</span>
      </div>

      {/* Main layout container wrapper */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left section containing product preview imagery and tags */}
          <div className="relative">
            {/* Availability status badge */}
            <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center justify-center rounded bg-[#014162] px-2.5 py-1 text-xs font-semibold text-white">
                {product.availableProduct}
              </span>
            </div>
            {/* Main product photo display */}
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full object-cover rounded-lg"
            />
          </div>

          {/* Right section containing details, pricing, and actions */}
          <div className="flex flex-col justify-between">

            <div>
              {/* Product metadata showing category and brand info */}
              <p className="text-gray-500 text-sm font-medium">{product.category} | {product.brand}</p>
              {/* Product title heading */}
              <h1 className="text-3xl font-bold text-gray-800 mt-2">{product.name}</h1>
              
              {/* Price section featuring current and discounted prices */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-gray-900">£{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 text-lg line-through">£{product.oldPrice}</span>
                )}
              </div>

              {/* Rating scores and priority service banner layout */}
              <div className="flex items-center gap-1 mt-3">
                {/* Star rating icons graphic */}
                <div className="flex items-center text-amber-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                {/* Numerical rating label */}
                <span className="text-xs text-gray-400">(3.8/5)</span>
                
                {/* Priority delivery notice banner */}
                <span className='absolute flex top-95 right-125 text-black border justify-center gap-0.25 items-center rounded-sm px-2 py-1 bg-[#DBDBDB] mb-1'>
                    <img className='h-[20px]' src="/Priority.svg" alt="priority" />
                    Priority Delivery Available
                </span>
              </div>

            </div>

            {/* Quantity stepper container box */}
            <div className='flex w-30 relative mt-2 items-center rounded-lg border border-gray-600 bg-white px-3 py-2 gap-8'>
               
                {/* Button to decrease amount or delete item */}
                <button aria-label="Delete" className="text-gray-600 cursor-pointer hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-gray-600 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6l1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                
                {/* Internal counter wrapper */}
                <div className="flex items-center  justify-between w-full">
                  {/* Current selected amount indicator */}
                  <span className="text-sm font-medium text-gray-700">1</span>
                  {/* Button to increment product quantity */}
                  <button className="text-gray-600 hover:text-black cursor-pointer ">+</button>
                </div>
              </div>
            
            {/* Bottom action row container */}
            <div className="flex items-center w-130 justify-between gap-4 mt-8 pt-4 border-t border-gray-100">
              {/* Primary call to action button for cart submission */}
              <button className="flex-1 w- flex items-center justify-center rounded-lg bg-primary gap-2 px-6 py-3 text-sm font-medium text-white transition hover:bg-[#01304a]">
                <ShoppingCart className='w-5 h-5 ' />
                Add To Cart <ChevronRight />
              </button>
              <button className="flex-1 w- flex items-center justify-center rounded-lg bg-[#DBDBDB] gap-2 px-6 py-3 text-sm font-medium text-primary transition hover:bg-[#01304a]">
                <Heart className='w-5 h-5 ' /> Add to favourite
              </button>

            </div>


          </div>

          
        </div>

      </div>
      <div className='reviews mt-8 border-t bg-secondary w-20 rounded-md border-gray-100 flex items-center justify-center'>
          <Link to="/ProductDetails" className='font-inter text-white  text-center py-1'>Reviews</Link>
      </div>
    </div>
  );
}