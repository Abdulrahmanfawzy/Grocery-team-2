import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCartItem, updateCartItem } from "../services/cart.service"
import { toast } from "sonner";



const useUpdateCartItem=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:({
            cartItemId,
            quantity,
        }:{
            cartItemId:number;
            quantity:number;
        })=> updateCartItem(cartItemId,quantity),
        

        onSuccess:(data)=>{
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey:['cart'],
            })
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
}
export default useUpdateCartItem;