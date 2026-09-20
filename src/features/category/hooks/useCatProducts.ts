import CategoryProductsService from "@/features/category/services/categroyProducts.service"
import { useQuery } from "@tanstack/react-query"

export const useCatProducts = (category_id:number , per_page:number) => {
    return useQuery({
        queryKey:["subCategories", category_id , per_page] ,
        queryFn:()=> CategoryProductsService(category_id , per_page) ,
  
        
    })
}