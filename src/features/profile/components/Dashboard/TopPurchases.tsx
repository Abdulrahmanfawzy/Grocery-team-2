import { Button } from "@/components"
import TopPurchaseItem from "./TopPurchaseItem";
import type { TopPurchase } from "../../types/dashboard.types";

interface IProps {
  purchases?: TopPurchase[];
}

const TopPurchases = ({ purchases = [] }: IProps) => {
    return (
        <div className="rounded-[8px] border border-[#D1D5DC] p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-b-[#D1D5DC] pb-4 ">
                <p className="text-[#0A0A0A] text-[16px] leading-[120%]  ">Your Top Purchases</p>
                <Button size="sm">Add as list</Button>
            </div>
            {purchases.length === 0 ? (
                <p className="mt-4 text-center text-[14px] text-[#4A5565]">No purchases yet</p>
            ) : (
                purchases.map((purchase) => (
                    <TopPurchaseItem
                        key={purchase.id}
                        image={purchase.image}
                        name={purchase.name}
                        soldCount={purchase.purchase_count}
                        onClick={() => console.log(purchase.id)}
                    />
                ))
            )}
        </div>
    )
}

export default TopPurchases
