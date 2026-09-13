import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, ChevronRight, Heart, Trash, Check, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProductDetails() {
    const { id } = useParams();
    
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [cartNotification, setCartNotification] = useState(false);
    const [activeTab, setActiveTab] = useState('description');

    const [carouselQuantities, setCarouselQuantities] = useState({});

    const handleCarouselQtyChange = (itemId, delta) => {
        setCarouselQuantities(prev => {
            const current = prev[itemId] || 1;
            const updated = current + delta;
            return { ...prev, [itemId]: updated > 0 ? updated : 1 };
        });
    };

    const handleCarouselReset = (itemId) => {
        setCarouselQuantities(prev => ({ ...prev, [itemId]: 1 }));
    };

    const Reviews = [
        { id: 1, name: 'John Doe', image: '/Banner.jpg', date: '2022-01-01', rating: 3.5, description: 'arrived perfectly nice.' },
        { id: 2, name: 'johnson', image: '/Banner.jpg', date: '2022-01-01', rating: 4.5, description: 'Super fresh and flavorful- arrived perfectly nice.' },
        { id: 3, name: 'Ali', image: '/Banner.jpg', date: '2022-01-01', rating: 4.8, description: 'Super fresh and flavorful- arrived perfectly nice.' },
    ];

    const MOCK_PRODUCTS = [
        { 
            id: 1, 
            name: 'Fresh Peach', 
            category: 'Vegetables', 
            price: 32, 
            oldPrice: 45, 
            image: '/Banner.jpg', 
            brand: 'Brand A', 
            productType: 'Fresh', 
            availableProduct: 'In Stock', 
            image2: '/Banner.jpg', 
            image3: '/Banner.jpg',
            description: 'Super fresh and flavorful- arrived perfectly nice.',
            rating: 3.8,
            measure: 'kg',
            priceForoneKilo: 45,
            NutritionalFacts: [{ id: 1, name: 'calories', value: '45' }],
        },
        { 
            id: 2, 
            name: 'Organic Pineapple', 
            category: 'Fruits', 
            price: 45, 
            oldPrice: 60, 
            image: '/Banner.jpg', 
            brand: 'Brand B', 
            productType: 'Organic', 
            availableProduct: 'Out of Stock', 
            image2: '/Banner.jpg', 
            image3: '/Banner.jpg',
            description: 'Sweet and juicy, very sweet and clean.',
            rating: 4.2, 
            measure: 'kg',
            priceForoneKilo: 35,
            NutritionalFacts: [{ id: 2, name: 'calories', value: '45' }],
        },
        { 
            id: 3, 
            name: 'Fresh Broccoli', 
            category: 'Vegetables', 
            price: 20, 
            oldPrice: 30, 
            image: '/Banner.jpg', 
            brand: 'Brand C', 
            productType: 'Frozen', 
            availableProduct: 'In Stock', 
            image2: '/Banner.jpg', 
            image3: '/Banner.jpg',
            description: 'Consistent quality every time, highly recommend.',
            rating: 4.0,
            measure: 'kg',
            priceForoneKilo: 35,
            NutritionalFacts: [{ id: 3, name: 'calories', value: '45' }],
        },
        { 
            id: 4, 
            name: 'Fresh Milk', 
            category: 'Dairy', 
            price: 15, 
            oldPrice: 22, 
            image: '/Banner.jpg', 
            brand: 'Brand A', 
            productType: 'Fresh', 
            availableProduct: 'Out of Stock', 
            image2: '/Banner.jpg', 
            image3: '/Banner.jpg',
            description: 'Pure and fresh daily dairy product.',
            rating: 4.5,
            measure: 'kg',
            priceForoneKilo: 35,
            NutritionalFacts: [{ id: 4, name: 'calories', value: '45' }],
        },
    ];

    const RELATED_PRODUCTS = [
        { id: 101, name: 'Spiro Sathis Lemon', price: 8.8, oldPrice: 11, image: '/Banner.jpg', badge: 'In Stock', discount: 'Save 20%' },
        { id: 102, name: 'V7 Cola - 300ML', price: 15, oldPrice: 20, image: '/Banner.jpg', badge: 'In Stock' },
        { id: 103, name: 'Nestlé Pure Life 6L', price: 60, oldPrice: 75, image: '/Banner.jpg', badge: 'Still 6L', discount: 'In Stock' },
        { id: 104, name: 'Red Apple - 1Kg', price: 30, oldPrice: 38, image: '/Banner.jpg', badge: 'In Stock', discount: 'Save 20%' },
        { id: 105, name: 'Kiwis - 1Kg', price: 150, oldPrice: 180, image: '/Banner.jpg', badge: 'Organic', discount: 'Save 20%' },
        { id: 106, name: 'Pineapples - 1Piece', price: 120, oldPrice: 140, image: '/Banner.jpg', badge: 'In Stock' },
    ];

    const product = MOCK_PRODUCTS.find((p) => p.id === Number(id)) || MOCK_PRODUCTS[0];

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const handleReset = () => setQuantity(1);

    const handleAddToCart = () => {
        setCartNotification(true);
        setTimeout(() => setCartNotification(false), 3000);
    };

    return (
        <div className="w-full bg-white px-4 md:px-12 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm mb-6">
                    <Link to='/HomePage' className="text-[#BCB8B1] hover:text-primary">Home</Link>
                    <span className="text-[#BCB8B1]">/</span>
                    <Link to='/ProductList' className="text-[#BCB8B1] hover:text-primary">Categories</Link>                    
                    <span className="text-[#BCB8B1]">/</span>
                    <Link to='/ProductList' className="text-[#BCB8B1] hover:text-primary">{product?.category}</Link>
                    <span className="text-[#BCB8B1]">/</span>
                    <span className="text-gray-800 font-medium">{product?.name}</span>
                </div>

                {cartNotification && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md flex items-center gap-2 text-sm">
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                        <span>Successfully added <strong>{quantity} {product?.measure}(s)</strong> to your cart!</span>
                    </div>
                )}

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white">
                    <div className="flex flex-col items-center">
                        <img src={product?.image} alt={product?.name} className="rounded shadow-sm shadow-gray-400 w-full max-w-md h-72 sm:h-96 object-cover" />
                        <div className="flex items-center justify-center gap-3 mt-4 w-full">
                            <img src={product?.image2} alt="thumbnail" className="rounded shadow-sm shadow-gray-400 w-16 h-16 object-cover cursor-pointer hover:opacity-75" />
                            <img src={product?.image3} alt="thumbnail" className="rounded shadow-sm shadow-gray-400 w-16 h-16 object-cover cursor-pointer hover:opacity-75" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product?.name}</h1>
                        <p className="text-base md:text-lg text-gray-600 mt-2">£ {product?.priceForoneKilo} | per {product?.measure}</p>
                        <p className="text-xl md:text-2xl font-semibold text-primary mt-1">£ {product?.price * quantity}</p>
                        
                        <div className="rounded bg-gray-100 w-full sm:w-60 h-9 flex items-center justify-center gap-2 mt-3 text-sm text-gray-700">
                            <img src="/mdi_clock-fast.svg" alt="fast delivery" className="w-5 h-5" /> 
                            Priority Delivery Available
                        </div>

                        <div className="border-b border-gray-200 w-full my-4"></div>

                        <h2 className='font-medium text-gray-700'>Quantity</h2>
                        <div className="quantity rounded-lg mt-2 w-36 bg-white border-2 border-primary flex items-center justify-between px-1">
                            <button onClick={quantity > 1 ? handleDecrement : handleReset} className="text-primary cursor-pointer w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 rounded">
                                <Trash className="w-4 h-4" />
                            </button>
                            <span className="text-center font-medium w-10">{quantity}</span>
                            <button onClick={handleIncrement} className="cursor-pointer text-primary w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-100 rounded">
                                +
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button onClick={handleAddToCart} className="bg-primary hover:bg-primary/95 text-white rounded-sm w-full sm:w-48 h-11 flex items-center justify-center gap-2 font-medium cursor-pointer">
                                <ShoppingCart className="w-5 h-5" /> Add to cart <ChevronRight className="w-4 h-4" />
                            </button>
                            <button onClick={() => setIsFavorite(!isFavorite)} className={`flex items-center justify-center gap-2 w-full sm:w-48 h-11 rounded-sm font-medium cursor-pointer ${isFavorite ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}> 
                                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} /> 
                                {isFavorite ? 'Favorited' : 'Add To Favourite'}
                            </button> 
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-16 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm">
                    <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-4">
                        <button onClick={() => setActiveTab('description')} className={`px-4 md:px-6 py-2 rounded-md font-medium text-sm md:text-base cursor-pointer ${activeTab === 'description' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>Description</button>
                        <button onClick={() => setActiveTab('reviews')} className={`px-4 md:px-6 py-2 rounded-md font-medium text-sm md:text-base cursor-pointer ${activeTab === 'reviews' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>Reviews ({Reviews.length})</button>
                        <button onClick={() => setActiveTab('nutritional')} className={`px-4 md:px-6 py-2 rounded-md font-medium text-sm md:text-base cursor-pointer ${activeTab === 'nutritional' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>Nutritional Facts</button>
                    </div>

                    <div className="mt-6">
                        {activeTab === 'description' && <p className="text-gray-700 text-sm md:text-base">{product?.description}</p>}
                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {Reviews.map((rev, index) => (
                                    <div key={index} className="flex gap-4 border-b border-gray-100 pb-4">
                                        <img src={rev.image} alt={rev.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between"><h4 className="font-semibold text-gray-900 text-sm md:text-base">{rev.name}</h4><span className="text-xs text-gray-400">{rev.date}</span></div>
                                            <p className="text-gray-600 text-xs md:text-sm mt-1">{rev.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'nutritional' && (
                            <div className="text-gray-700 space-y-2">
                                {product?.NutritionalFacts?.map((fact) => (
                                    <div key={fact.id} className="flex justify-between border-b border-gray-100 py-2 max-w-sm text-sm md:text-base">
                                        <span className="font-medium text-gray-800">{fact.name}:</span>
                                        <span className="text-gray-600">{fact.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Frequently Bought Together Carousel */}
                <div className="mt-16">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Frequently Bought Together</h2>
                    <Carousel className="w-full relative px-6 md:px-8">
                        <CarouselContent className="-ml-4">
                            {RELATED_PRODUCTS.slice(0, 4).map((item) => {
                                const currentQty = carouselQuantities[item.id] || 1;
                                return (
                                    <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                        <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col justify-between h-full shadow-xs">
                                            <div>
                                                <div className="flex gap-2 mb-2">
                                                    <span className="text-xs bg-blue-900 text-white px-2 py-0.5 rounded">{item.badge}</span>
                                                    {item.discount && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{item.discount}</span>}
                                                </div>
                                                <img src={item.image} alt={item.name} className="h-36 sm:h-40 w-full object-contain my-2" />
                                                <h3 className="font-medium text-gray-900 text-sm mt-2">{item.name}</h3>
                                                <div className="flex items-center gap-1 my-1">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                                                </div>
                                                <p className="font-bold text-gray-900 mt-1">£ {item.price * currentQty}</p>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2">
                                                <button onClick={() => alert(`Added ${currentQty} of ${item.name} to cart!`)} className="bg-primary text-white text-xs px-2 py-2 rounded flex-1 flex items-center justify-center gap-1 cursor-pointer">
                                                    <ShoppingCart className="w-3.5 h-3.5" /> Add To Cart
                                                </button>
                                                <div className="border border-gray-300 rounded px-1.5 py-1 text-xs flex items-center gap-1 bg-white shrink-0">
                                                    <button onClick={() => currentQty > 1 ? handleCarouselQtyChange(item.id, -1) : handleCarouselReset(item.id)} className="text-primary cursor-pointer w-5 h-5 flex items-center justify-center">
                                                        <Trash className="w-3 h-3" />
                                                    </button>
                                                    <span className="font-medium px-1 text-center">{currentQty}</span>
                                                    <button onClick={() => handleCarouselQtyChange(item.id, 1)} className="text-primary font-bold cursor-pointer w-5 h-5 flex items-center justify-center">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-2 md:-left-4 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
                        <CarouselNext className="absolute -right-2 md:-right-4 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
                    </Carousel>
                </div>

                {/* More To Explore Carousel */}
                <div className="mt-16 mb-20">
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">More To Explore</h2>
                    <Carousel className="w-full relative px-6 md:px-8">
                        <CarouselContent className="-ml-4">
                            {RELATED_PRODUCTS.map((item) => {
                                const currentQty = carouselQuantities[item.id] || 1;
                                return (
                                    <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                        <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col justify-between h-full shadow-xs">
                                            <div>
                                                <div className="flex gap-2 mb-2">
                                                    <span className="text-xs bg-green-900 text-white px-2 py-0.5 rounded">{item.badge}</span>
                                                    {item.discount && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{item.discount}</span>}
                                                </div>
                                                <img src={item.image} alt={item.name} className="h-36 sm:h-40 w-full object-contain my-2" />
                                                <h3 className="font-medium text-gray-900 text-sm mt-2">{item.name}</h3>
                                                <div className="flex items-center gap-1 my-1">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                                                </div>
                                                <p className="font-bold text-gray-900 mt-1">£ {item.price * currentQty}</p>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2">
                                                <button onClick={() => alert(`Added ${currentQty} of ${item.name} to cart!`)} className="bg-primary text-white text-xs px-2 py-2 rounded flex-1 flex items-center justify-center gap-1 cursor-pointer">
                                                    <ShoppingCart className="w-3.5 h-3.5" /> Add To Cart
                                                </button>
                                                <div className="border border-gray-300 rounded px-1.5 py-1 text-xs flex items-center gap-1 bg-white shrink-0">
                                                    <button onClick={() => currentQty > 1 ? handleCarouselQtyChange(item.id, -1) : handleCarouselReset(item.id)} className="text-primary cursor-pointer w-5 h-5 flex items-center justify-center">
                                                        <Trash className="w-3 h-3" />
                                                    </button>
                                                    <span className="font-medium px-1 text-center">{currentQty}</span>
                                                    <button onClick={() => handleCarouselQtyChange(item.id, 1)} className="text-primary font-bold cursor-pointer w-5 h-5 flex items-center justify-center">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-2 md:-left-4 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
                        <CarouselNext className="absolute -right-2 md:-right-4 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
                    </Carousel>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;