import CategoryListService from "@/features/category/services/category.service";
import { useQuery } from "@tanstack/react-query"

export const useCategory = () => {
    return useQuery({
        queryKey:["category"],
        queryFn: CategoryListService,
    })
}; 
