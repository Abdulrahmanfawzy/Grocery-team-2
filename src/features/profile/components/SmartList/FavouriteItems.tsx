import { Star } from "lucide-react"
import { FavouritItemsData } from "../../data/favouriteItems"
import FavItemCard from "./favItemCard"
import { Button } from "@/components"

interface IProps {



}

const FavouriteItems = ({ }: IProps) => {
    return (
        <section className="rounded-[14px] border border-[#f0e9e9] p-4 shadow_[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center">
                    <Star className="w-5 h-5 text-[#696865] mr-2" />
                    <h3 className="text-[16px] leading-6 text-[#0A0A0A]">Favorite Items</h3>
                </div>
                <p className="cursor-pointer text-[14px] leading-5 text-[#4C524E] sm:self-auto">Manage Favorites</p>


            </div>
            <div className="mt-8 mb-5 grid grid-cols-1 gap-4 sm:gap-6 md:mt-12 md:grid-cols-2">
                {FavouritItemsData.map((item) => (
                    <FavItemCard

                        key={item.name}
                        image={item.image}
                        name={item.name}
                        price={item.price}

                    />
                ))}
            </div>
            <Button className="w-full cursor-pointer" variant="outline">Add All to Favourite Cart</Button>

        </section>
    )
}

export default FavouriteItems