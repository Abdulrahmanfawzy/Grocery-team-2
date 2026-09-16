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

        onSuccess:async(data)=>{
            toast.success(data.message);
            await queryClient.invalidateQueries({
                queryKey:['cart'],
            })
        },
        onError:(err)=>{
            toast.error(err.message)
        }
    })
}
export default useAddCartItem;