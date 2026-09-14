import { ShoppingCart, Star, Trash } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { RELATED_PRODUCTS } from "@/constants/Related_Products";

export function FrequentlyBoughtTogetherCarousel({ carouselQuantities, handleCarouselQtyChange, handleCarouselReset }: { carouselQuantities: Record<number, number>; handleCarouselQtyChange: (itemId: number, delta: number) => void; handleCarouselReset: (itemId: number) => void }) {
    return (
        <div className="mt-10 sm:mt-16 w-full overflow-hidden">    
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Bought Together</h2>
            <Carousel className="w-full relative px-6 sm:px-12 md:px-16">
                <CarouselContent className="-ml-3 sm:-ml-4">
                    {RELATED_PRODUCTS.slice(0, 4).map((item) => {
                        const currentQty = carouselQuantities[item.id] || 1;
                        return (
                            <CarouselItem key={item.id} className="pl-3 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white flex flex-col justify-between h-full shadow-xs">
                                    <div>
                                        <div className="flex gap-2 mb-2">
                                            <span className="text-xs bg-blue-900 text-white px-2 py-0.5 rounded">{item.badge}</span>
                                            {item.discount && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{item.discount}</span>}
                                        </div>
                                        <img src={item.image} alt={item.name} className="h-36 sm:h-40 w-full object-contain my-2" />
                                        <h3 className="font-medium text-gray-900 text-sm mt-2 line-clamp-1">{item.name}</h3>
                                        <div className="flex items-center gap-1 my-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <p className="font-bold text-gray-900 mt-1">£ {item.price * currentQty}</p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap sm:flex-nowrap items-center gap-2">
                                        <button onClick={() => alert(`Added ${currentQty} of ${item.name} to cart!`)} className="bg-app-primary text-white text-xs px-2 py-2.5 rounded flex-1 min-w-[100px] flex items-center justify-center gap-1 cursor-pointer">
                                            <ShoppingCart className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">Add To Cart</span>
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
                <CarouselPrevious className="absolute -left-1 sm:left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer" />
                <CarouselNext className="absolute -right-1 sm:right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer" />
            </Carousel>
        </div>
    );
}