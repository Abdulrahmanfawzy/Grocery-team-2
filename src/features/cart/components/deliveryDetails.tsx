import { Button } from "@/components";
import promoIcon from "../../../assets/promoIcon.svg";

const DeliveryDetails = () => {
    return (
        <section className="flex min-w-0 flex-col gap-4 ">
            <h3 className="text-[20px] font-medium leading-[150%] text-app-black">
                Delivery Details & Promo Code
            </h3>

            <div className="gap-4 flex flex-col h-[214px]">
               

                <div className="rounded-[10px] border-[0.8px] border-[#DAD8D8] p-4  flex flex-col">

                    {/* Promo Code */}
                    <div className="pt-4 pl-4">
                        <div className="flex justify-between items-end ">
                            <div className="flex flex-col gap-2 ">
                                {/* promo heading */}
                                <div className="mb-2 flex items-center gap-2">
                                    <img src={promoIcon} alt="Promo Code" />
                                    <h3 className="text-[16px] text-[#101828] font-normal leading-[120%]">
                                        Promo Code
                                    </h3>
                                </div>
                                {/* promo input */}
                                <div className="w-19.75 rounded-[8px] border border-app-light-gray bg-white px-3 py-2.5 text-[10px] outline-none placeholder:text-gray-500 focus:border-[#014162]">
                                    <input
                                        type="text"
                                        placeholder="Save10"
                                        className="border-none bg-transparent text-[16px] outline-none placeholder:text-app-black focus:ring-0"

                                    />
                                </div>

                            </div>
                            <Button
                            type="button"
                           
                            size="md"
                            className="mt-2 w-37.5 rounded-[8px] bg-app-silver! px-4! text-sm text-app-main! hover:bg-app-main! hover:text-white!"
                        >
                            Apply Code
                            </Button>
                        </div>

            
                    </div>

                    {/* Delivery Address */}
                    <div className="pt-4 pl-4 gap-2">
                        <p className="mb-2 text-[18px] text-app-black font-normal leading-[120%]">
                            Delivery Address
                        </p>

                        <div className="flex items-center gap-2 ">
                            
                                <div className="flex-1 rounded-[8px] border border-app-light-gray bg-white px-3 py-2.5 text-[10px] outline-none placeholder:text-gray-500 focus:border-[#014162]">
                                    <input
                                        type="text"
                                        value="Villa 14, Street 23, District 5, New Cairo, Cairo"  readOnly
                                        className="w-full border-none bg-transparent text-[16px] outline-none "

                                    />
                                </div>

                              <Button
                            type="button"
                           
                            size="sm"
                            className="mt-2 w-37.5 rounded-[8px] bg-app-silver! px-4! text-sm text-app-main! hover:bg-app-main! hover:text-white!"
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
