import { useQuery } from "@tanstack/react-query"
import HotDealsService from "../services/HotDeals.service"

const useHotDeal = ({limit , category_id} : {limit: number , category_id?:number})=>{
    return useQuery({
        queryKey:["HotDeals",limit , category_id],
        queryFn:()=>HotDealsService(limit , category_id)
    })
}

export default useHotDeal