import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCartItem } from "../services/cart.service";
import { toast } from "sonner";



const useDeleteCartItem=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:({
            cartItemId
        }:{cartItemId:number;})=>deleteCartItem(cartItemId),

        onSuccess:()=>{
            toast.success( "item deleted successfully");
            queryClient.invalidateQueries({
                queryKey:['cart']
            })
        },
        onError:(err)=>{
            toast.error(err.message)
        }

    })
}
export default useDeleteCartItem;