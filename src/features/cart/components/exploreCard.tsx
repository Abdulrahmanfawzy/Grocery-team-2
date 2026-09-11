import { Button } from "@/components";
import QuantityControl from "@/components/common/QuantityControl";
import { ShoppingCart, Star } from "lucide-react";

const badgeClassName = "flex h-[26px] items-center justify-center rounded-tl-[15px] rounded-br-[15px] px-2 py-1 text-xs font-medium text-white";
const badgeStyle = {
    background:
        "linear-gradient(0deg, rgba(1, 65, 98, 0.5) -28.12%, rgba(1, 65, 98, 0.8) 30.45%, #014162 87.19%)",
};

interface ExploreCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    oldPrice?: number;
    rating?: number;
    inStock: boolean;
    discount?: number;
    isNew?: boolean;
}

const ExploreCard = ({
    name,
    price,
    image,
    oldPrice,
    rating,

    inStock,
    discount,
    isNew,
}: ExploreCardProps) => {
    return (
        <div className="relative w-[350px] md:w-full overflow-hidden rounded-[8px] border border-gray-200 bg-white p-4">

            {/* Product Image */}
            <div className="relative flex h-52 items-center gap-3 justify-center rounded-xl bg-white">

                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-contain px-4 pb-4 pt-10 sm:pt-12"
                />

                <div className="absolute left-3 top-3 flex max-w-full flex-wrap items-center gap-2">
                    {/* stock Badge */}
                    {inStock !== undefined && (
                        <span className={badgeClassName} style={badgeStyle}>
                            {inStock ? "In Stock" : "Out Of Stock"}
                        </span>
                    )}
                    {/* Discount Badge */}
                    {discount !== undefined && (
                        <span className={`${badgeClassName} w-[62px]`} style={badgeStyle}>
                            save{discount}%
                        </span>
                    )}

                    {/* New Badge */}
                    {isNew && (
                        <span className={`${badgeClassName} w-[62px]`} style={badgeStyle}>
                            New
                        </span>
                    )}
                </div>

            </div>

            {/* Product Info */}
            <div className="mt-4 flex min-w-0  flex-col gap-2 ">
                <div className="grid min-w-0 grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-3">

                    <h3 className="min-w-0 truncate text-base text-[#01050DCC] sm:text-lg">
                        {name}
                    </h3>

                    <span className="shrink-0 text-base leading-[120%] text-app-black sm:text-lg">
                        £{price}
                    </span>

                    {oldPrice !== undefined && (
                        <span className="shrink-0 text-base leading-[120%] text-app-silver line-through sm:text-lg">
                            £{oldPrice}
                        </span>
                    )}
                </div>

                {/* Rating */}
                {rating !== undefined && (
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5`}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Star
                                    key={index}
                                    className={index < Math.round(rating) ? "h-5 w-5 text-[#FDC040]" : "h-5 w-5 text-[#DAD8D8]"}
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                        <span className="text-[12px]  text-app-silver">Rating ({rating}/5)</span>
                    </div>
                )}





            </div>
            {/* cta & counter */}

            <div className="mt-3 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between ">

                <Button
                    type="button"
                    size="md"
                    variant="primary"
                    className="gap-2 rounded-[8px] bg-app-main px-3 text-[15px] font-normal text-white hover:bg-[#013650] sm:flex-none sm:px-4 sm:text-[16px]"
                >
                    <ShoppingCart
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        aria-hidden="true"
                    />
                    <span className="truncate">Add To Cart</span>
                </Button>

                <QuantityControl
                    quantity={1}
                    name={name}
                    onIncrease={() => { }}
                    onDecrease={() => { }}
                />

            </div>

        </div>
    );
};

export default ExploreCard;