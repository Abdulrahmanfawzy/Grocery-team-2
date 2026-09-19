import { Button } from "@/components";

interface IProps {

    image: string;
    name: string;
    price: number;

}

const FavItemCard = ({ image, name, price }: IProps) => {
    return (
        <div className="flex min-w-0 items-center justify-between gap-3 rounded-[10px] border-[0.8px] border-[#E5E7EB] p-3 sm:p-4">
            <div className="flex min-w-0 items-center gap-2">
                <img src={image} alt={name} className="h-12 w-12 shrink-0" />
            <div className="min-w-0 flex flex-col gap-2">
                <h4 className="truncate text-[14px] leading-5 text-[#0A0A0A]">{name}</h4>
                <p className="text-[#041209] leading-5 text-[14px] ">£{price}</p>

            </div>
            </div>
            <Button className="shrink-0 cursor-pointer">Add</Button>


        </div>
    )
}

export default FavItemCard