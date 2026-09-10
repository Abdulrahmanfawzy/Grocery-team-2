import { Button } from "@/components";
import promoIcon from "../../../assets/promoIcon.svg";

const DeliveryDetails = () => {
    return (
        <section className="flex min-w-0 flex-col gap-4 ">
            <h3 className="text-[20px] font-medium leading-[150%] text-app-black">
                Delivery Details & Promo Code
            </h3>

            <div className="flex min-h-53.5 flex-col rounded-[10px] border-[0.8px] border-[#DAD8D8] bg-white pt-4 pl-4 ">
                <div className="flex flex-col gap-6 p-2 sm:p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex min-w-0 flex-1 flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <img src={promoIcon} alt="Promo Code" />
                                <h4 className="text-[16px] font-normal leading-[120%] text-[#101828]">
                                    Promo Code
                                </h4>
                            </div>

                            <div className="w-full max-w-79 rounded-[8px] border border-app-light-gray bg-white px-3 py-2.5">
                                <input
                                    type="text"
                                    placeholder="Save10"
                                    className="w-full border-none bg-transparent text-[16px] outline-none placeholder:text-app-black focus:ring-0"
                                />
                            </div>
                        </div>

                        <Button
                            type="button"
                            size="md"
                            className="w-full shrink-0 rounded-[8px] bg-app-silver! px-4! text-sm text-app-main! hover:bg-app-main! hover:text-white! sm:w-37.5"
                        >
                            Apply Code
                        </Button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[18px] font-normal leading-[120%] text-app-black">
                            Delivery Address
                        </p>

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center ">
                            <div className="min-w-0 flex-1 rounded-[8px] border border-app-light-gray bg-white px-3 py-2.5">
                                <input
                                    type="text"
                                    value="Villa 14, Street 23, District 5, New Cairo, Cairo"
                                    readOnly
                                    className="w-full border-none bg-transparent text-[16px] outline-none"
                                />
                            </div>

                            <Button
                                type="button"
                                size="sm"
                                className="w-full shrink-0 rounded-[8px] bg-app-silver! px-4! text-sm text-app-main! hover:bg-app-main! hover:text-white! sm:w-37.5"
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryDetails;
