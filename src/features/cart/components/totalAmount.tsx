import { Button } from "@/components";

interface TotalAmountProps {
    subtotal: number;
    shipping: number;
}

const TotalAmount = ({ subtotal, shipping }: TotalAmountProps) => {
    const total = subtotal + shipping;

    return (
        <section className="flex min-w-0 flex-col gap-4">
            <h3 className="text-[20px] font-medium leading-[150%] text-app-black">
                Total Amount
            </h3>

            <div className="flex min-h-53.5  flex-col rounded-[10px] border-[0.8px] border-[#DAD8D8] bg-white p-4">
                <div className="flex w-full max-w-99 flex-col gap-2 py-4">
                    <div className="flex w-full flex-col gap-2 text-[16px] leading-[120%] text-[#6B6F75]">
                        <div className="flex items-center justify-between gap-4">
                            <span>Subtotal</span>
                            <span className="w-24 shrink-0 text-left">£ {subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <span>Shipping</span>
                            <span className="w-24 shrink-0 text-left">£ {shipping.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="my-2 w-full border-t border-[#D1D5DC]" />

                    <div className="flex w-full items-center justify-between gap-4 text-[18px] font-normal leading-[120%] text-app-black">
                        <span>Total</span>
                        <span className="w-24 shrink-0 text-left">£ {total.toFixed(2)}</span>
                    </div>

                    <Button
                        type="button"
                        size="md"
                        className="mt-3  rounded-[8px] bg-app-main px-4 text-sm text-white hover:bg-[#013650]"
                    >
                        Go To Checkout
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TotalAmount;
