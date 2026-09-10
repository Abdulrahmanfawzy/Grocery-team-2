import { Button } from "@/components";
import type { Product } from "../types/product.types";

interface CartSummaryProps {
    products: Product[];
}

const CartSummary = ({ products }: CartSummaryProps) => {
    const shipping = 40;
    const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const total = subtotal + shipping;

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Total Amount */}
            <div className="gap-4 flex flex-col">
                {/* heading */}
                <h3 className="text-[20px] font-medium text-app-black leading-[150%]">
                    Total Amount
                </h3>
                {/* amount */}
                <div className="rounded-[10px] border-[0.8px] border-[#DAD8D8] bg-white p-4 gap-3 flex flex-col">
                    <div className="flex flex-col gap-2 py-4 ">
                        <div className=" w-99 max-w-full  ">
                            {/* Subtotal */}
                            <div className="flex items-center justify-between text-[16px] leading-[120%] text-[#6B6F75]">
                                <span>Subtotal</span>
                                <span className="w-24 text-left">£ {subtotal.toFixed(2)}</span>
                            </div>

                            {/* Shipping */}
                            <div className="mt-2 flex items-center justify-between text-[16px] leading-[120%] text-[#6B6F75]">
                                <span>Shipping</span>
                                <span className="w-24 text-left">£ {shipping.toFixed(2)}</span>
                            </div>

                        </div>

                        {/* Divider */}
                        <div className="my-2 w-full border-t border-[#D1D5DC]" />

                        {/* Total */}
                        <div className="flex w-99 max-w-full items-center justify-between text-[18px] font-regular leading-[120%] text-app-black">
                            <span>Total</span>
                            <span className="w-24 text-left">£ {total.toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <Button
                            type="button"
                            size="md"
                            className="mt-3 w-99 max-w-full rounded-[8px] bg-app-main px-4 text-sm text-white hover:bg-[#013650]"
                        >
                            Go To Checkout
                        </Button>
                    </div>

                </div>
            </div>

           

        </div>
    );
}

export default CartSummary