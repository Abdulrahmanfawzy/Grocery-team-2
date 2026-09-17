import { Button } from "@/components";

interface IProps {

image: string;
  name: string;
  soldCount: number;
  onClick: () => void;

}

const TopPurchaseItem=({  image,
  name,
  soldCount,
  onClick,}:IProps)=> {
  return (
      <div className="flex w-full items-center gap-3 border-b border-[#D1D5DC] py-4 last:border-b-0">
      
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-16 w-16 rounded-md object-cover"
      />

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-[14px] font-medium text-[#0A0A0A]">
          {name}
        </p>

        <p className="text-[12px] text-[#4A5565]">
          {soldCount} times purchased
        </p>
      </div>

      {/* Button */}
      <Button size="sm" onClick={onClick}>
        Add
      </Button>
    </div>
  )
}

export default TopPurchaseItem