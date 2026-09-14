import { ShoppingCart, Star, Trash } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { RELATED_PRODUCTS } from "@/constants/Related_Products";
import { useState } from "react";

function ExploreCarousel() {
    const [carouselQuantities, setCarouselQuantities] = useState<{ [key: string]: number }>({});

    const handleCarouselQtyChange = (id: string, delta: number) => {
        setCarouselQuantities(prev => {
            const currentQty = prev[id] || 1;
            const newQty = Math.max(1, currentQty + delta);
            return { ...prev, [id]: newQty };
        });
    };

    const handleCarouselReset = (id: string) => {
        setCarouselQuantities(prev => {
            const { [id]: _, ...rest } = prev;
            return rest;
        });
    };

    return (
        <div className="mt-10 sm:mt-16 mb-12 sm:mb-20">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6">More To Explore</h2>
            <Carousel className="w-full relative px-6 sm:px-10 md:px-12">
                <CarouselContent className="-ml-3 sm:-ml-4">
                    {RELATED_PRODUCTS.map((item) => {
                        const currentQty = carouselQuantities[item.id] || 1;

                        return (
                            <CarouselItem key={item.id} className="pl-3 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-between h-full shadow-xs">
                                    <div>
                                        <div className="flex gap-2 mb-2">
                                            <span className="text-xs bg-green-900 text-white px-2 py-0.5 rounded">{item.badge}</span>
                                            {item.discount && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{item.discount}</span>}
                                        </div>
                                        <img src={item.image} alt={item.name} className="h-36 sm:h-40 w-full object-contain my-2" />
                                        <h3 className="font-medium text-gray-900 text-sm mt-2 line-clamp-1">{item.name}</h3>
                                        <div className="flex items-center gap-1 my-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <p className="font-bold text-gray-900 mt-1">£ {item.price * currentQty}</p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <button onClick={() => alert(`Added ${currentQty} of ${item.name} to cart!`)} className="bg-app-primary text-white text-xs px-2 py-2.5 rounded flex-1 flex items-center justify-center gap-1 cursor-pointer">
                                            <ShoppingCart className="w-3.5 h-3.5" /> Add To Cart
                                        </button>
                                        <div className="border border-app-primary rounded px-2 py-1 h-9 text-xs flex items-center justify-between bg-white shrink-0 min-w-[95px]">
                                            <button 
                                                onClick={() => currentQty > 1 ? handleCarouselQtyChange(item.id, -1) : handleCarouselReset(item.id)} 
                                                className="text-app-primary cursor-pointer w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded"
                                            >
                                                <Trash className="w-3 h-3" />
                                            </button>
                                            <span className="font-medium px-1 text-app-primary text-center">{currentQty}</span>
                                            <button 
                                                onClick={() => handleCarouselQtyChange(item.id, 1)} 
                                                className="text-app-primary font-bold cursor-pointer w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-2 sm:-left-5 md:-left-6 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
                <CarouselNext className="absolute -right-2 sm:-right-5 md:-right-6 border-none bg-transparent shadow-none hover:bg-transparent text-gray-700" />
            </Carousel>
        </div>
    );
}
export default ExploreCarousel;