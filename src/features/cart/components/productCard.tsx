import removeIcon from "../../../assets/remove.svg"
import addIcon from "../../../assets/plus.svg"
interface ProductCardProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
    inStock: boolean;
    showColumnDivider?: boolean;
    removeBottomBorder?: boolean;
    onIncrease: () => void;
    onDecrease: () => void;
}

const ProductCard = ({
    name,
    price,
    quantity,
    image,
    inStock,
    showColumnDivider = false,
    removeBottomBorder = false,
    onIncrease,
    onDecrease,
}: ProductCardProps) => {
    return (
        <div className={`relative flex min-h-27 w-full items-center gap-1 border-b border-[#D1D5DC] px-3 py-5 sm:px-4 ${showColumnDivider ? "after:absolute after:right-0 after:top-4 after:bottom-4 after:hidden after:w-px after:bg-[#D1D5DC] sm:after:block" : ""} ${removeBottomBorder ? "border-b-0" : ""}`}>

            <div className="flex w-full min-w-0 items-center">
                {/* frame */}
                <div className="flex w-full min-w-0 items-center gap-2 p-1">
                    {/* Image */}

                    <div className="flex w-20 shrink-0 flex-col items-center justify-center gap-2 sm:w-25">
                        <img src={image} alt={name} className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
                        <div className="flex h-6.5 max-w-full items-center justify-center rounded bg-app-black px-1 py-2 rounded-tl-[15px] rounded-br-[15px]">
                            <p className="p-1 text-center text-[12px] leading-[150%] text-app-hovered font-regular">
                                {inStock ? "In Stock" : "Out Of Stock"}
                            </p>
                        </div>

                    </div>

                    {/* Product Info */}
                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                        <h3 className="wrap-break text-[16px] leading-[120%] text-app-black sm:text-[18px]">
                            {name}
                        </h3>
                        {/* counter & price */}
                        <div className="flex flex-wrap items-center justify-between gap-2 px-1 sm:gap-4">

                            {/* Quantity h-9.75 w-34 */}  
                            <div className="flex shrink-0 items-center justify-between gap-2 rounded-[10px] border border-app-silver p-2 sm:gap-4">
                                <button
                                    type="button"
                                    aria-label={`Decrease quantity of ${name}`}
                                    onClick={onDecrease}
                                    className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered"
                                >
                                    <img src={removeIcon} alt="" className="h-4 w-3.5" />
                                </button>

                                <span className="px-2 text-[16px] leading-[120%] text-app-black font-regular sm:px-4 sm:text-[18px]">
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    aria-label={`Increase quantity of ${name}`}
                                    onClick={onIncrease}
                                    className="flex h-6 w-6 items-center justify-center rounded hover:bg-app-hovered "
                                >
                                    <img src={addIcon} alt="" className="h-4 w-3.5" />
                                </button>
                            </div>
                            {/* Price */}
                            <p className="text-[18px] font-medium text-app-black sm:text-[20px]">
                                £ {price * quantity}
                            </p>
                        </div>


                    </div>

                </div>
            </div>




        </div>
    );
};

export default ProductCard;