import { useQuery } from "@tanstack/react-query";
import { featchMoreToExploreProducts } from "../services/cart.service";


const useGetHotDealProducts=()=>{
    const query=useQuery({
        queryKey:["hot-deals"],
        queryFn:featchMoreToExploreProducts
    });
    return query;
}
export default useGetHotDealProducts;