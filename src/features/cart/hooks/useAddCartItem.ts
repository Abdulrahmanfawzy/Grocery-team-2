import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCartItem } from "../services/cart.service"
import { toast } from "sonner";



const useAddCartItem=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:({
            productId,
            quantity,
        }:{
            productId:number;
            quantity:number;
        })=> addCartItem(productId,quantity),

        onSuccess:(data)=>{
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey:['cart'],
            })
        }
    })
}
export default useAddCartItem;