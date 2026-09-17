import { Button } from "@/components"
import TopPurchaseItem from "./TopPurchaseItem";
import productImage from "../../../../assets/milk.png"
interface IProps {



}

const TopPurchases = ({ }: IProps) => {
    const purchasesDummy =  [{
    id: 1,
    image: productImage,
    name: "Fresh Milk",
    soldCount: 12,
  },
  {
    id: 2,
    image: productImage,
    name: "Whole Wheat Bread",
    soldCount: 9,
  },
  {
    id: 3,
    image: productImage,
    name: "Fresh Apples",
    soldCount: 7,
  },
];
    return (
        <div className="border border-[#D1D5DC] rounded-[8px] p-6 gap-4 ">
            {/* heading */}

            <div className="flex items-center justify-between border-b border-b-[#D1D5DC] pb-4 ">
                <p className="text-[#0A0A0A] text-[16px] leading-[120%]  ">Your Top Purchases</p>
                <Button size="sm">Add as list</Button>
            </div>
            {/* top purchses */}
            {purchasesDummy.map((purchase) => (
                <TopPurchaseItem key={purchase.id}
                    image={purchase.image}
                    name={purchase.name}
                    soldCount={purchase.soldCount}
                    onClick={() => console.log(purchase.id)} />
            ))}



        </div>
    )
}

export default TopPurchases