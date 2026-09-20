import { Button } from "@/components";
import { ShoppingCart, Trash } from "lucide-react";


interface IProps {
    image: string;
    nameList: string;
    numOfItems: number;
    timeOfUpdate: string;
}

const CardList = ({ image,
    nameList,
    numOfItems,
    timeOfUpdate, }: IProps) => {

    return (
        <div className="min-w-0 rounded-[14px] border border-[#f0e9e9] p-4 shadow_[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] sm:p-6">
            <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center justify-between gap-1.5">
                    <img
                        src={image}
                        alt={nameList}
                        className="h-13 w-16 rounded-lg object-cover mr-2"
                    />
                    <div className="flex flex-col gap-3 ">
                        <h3 className="truncate text-[16px] leading-6 text-[#0A0A0A]">{nameList}</h3>
                        <p className="text-sm text-[#4A5565] leading-5">
                            {numOfItems} items
                        </p>
                    </div>
                </div>
                <Trash className="text-gray-400 cursor-pointer" />

            </div>
            <p className="my-4 text-sm text-gray-500">
                Updated {timeOfUpdate} ago
            </p>



            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button size="md" className="w-full text-[12px]! text-normal! cursor-pointer sm:w-auto sm:px-8!" >
                    <ShoppingCart className="mr-2" size={20} />
                    Add all to cart
                </Button>
                <Button variant="outline" className="w-full cursor-pointer sm:w-auto">Edit</Button>
            </div>



        </div>
    )
}

export default CardList