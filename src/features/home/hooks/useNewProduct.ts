import { useQuery } from "@tanstack/react-query"
import NewProductService from "../services/NewProduct.service"

const useNewProduct = ({category_id , limit }: {category_id?:number , limit: number})=>{
    return useQuery({
        queryKey:["NewProducts",category_id ,limit],
        queryFn:()=>NewProductService(category_id ,limit )
    })
}

export default useNewProduct