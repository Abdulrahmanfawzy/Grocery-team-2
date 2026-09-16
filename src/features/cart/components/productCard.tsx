
import QuantityControl from "@/components/common/QuantityControl";
interface ProductCardProps {
    cartItemId:number;
    name: string;
    price: string;
    quantity: number;
    image: string;
    showColumnDivider?: boolean;
    removeBottomBorder?: boolean;
}

const ProductCard = ({cartItemId,
    name,
    price,
    quantity,
    image,
     showColumnDivider = false,
    removeBottomBorder = false,
    
    
}: ProductCardProps) => {
    return (
        <div className={`relative flex min-h-27.5 w-full items-center gap-1 border-b border-[#D1D5DC] px-3 py-5 sm:px-4 ${showColumnDivider ? "after:absolute after:right-0 after:top-4 after:bottom-4 after:hidden after:w-px after:bg-[#D1D5DC] sm:after:block" : ""} ${removeBottomBorder ? "border-b-0" : ""}`}>

            <div className="flex w-full min-w-0 items-center">
                {/* frame */}
                <div className="flex w-full min-w-0 items-center gap-2 p-1">
                    {/* Image */}

                    <div className="flex w-22 shrink-0 flex-col items-center justify-center gap-2 sm:w-25">
                        <img src={image} alt={name} className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
                        {/* Remove in stock from ui */}
                    </div>

                    {/* Product Info */}
                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                        <h3 className="wrap-break text-[16px] leading-[120%] text-app-black sm:text-[18px]">
                            {name}
                        </h3>
                        {/* counter & price */}
                        <div className="flex flex-wrap items-center justify-between gap-2 px-1 sm:gap-4">

                            {/* Quantity  */}
                            {/* make it reusable */}
                            <QuantityControl 
                                cartItemId={cartItemId}
                                quantity={quantity}
                                name={name}
                              
                                />
                            {/* Price */}
                            <p className="text-[18px] font-medium text-app-black sm:text-[20px]">
                                £ {(Number(price) * quantity).toFixed(2)}
                            </p>
                        </div>



                    </div>

                </div>
            </div>




        </div>
    );
};

export default ProductCard;