import { useQuery } from "@tanstack/react-query"
import BestSelles from "../services/BestSelles.service"

const useBestSelles =({limit}:{limit:number})=>{
    return useQuery({
        queryKey:["BestSelles",limit],
        queryFn:()=>BestSelles({limit})
    })   
}
export default useBestSelles