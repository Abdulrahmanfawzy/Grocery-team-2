import api from "@/utils/axios";
import type { CartItemResponse, CartResponse } from "../types/cart.types";


export const fetchProductsCart=async():Promise<CartResponse>=>{
    try {
        const result = await api.get<CartResponse>("/cart");
        return result.data;
    } catch (error) {
        const err = error as Error & { status?: number };
        if (err.status === 404) {
            return {
                success: true,
                message: "Cart is empty",
                data: { id: 0, user_id: 0, created_at: "", items: [] },
            };
        }
        throw error;
    }
}
export const addCartItem = async(productId:number,quantity:number):Promise<CartItemResponse>=>{
    const result = await api.post('/cart/items',{
        product_id: productId,
        quantity,
    })
    return result.data;
}
export const updateCartItem = async(cartItemId:number,quantity:number):Promise<CartResponse>=>{
    const result = await api.put(`/cart/items/${cartItemId}`,{

        quantity,
    })
    return result.data;
}

export const deleteCartItem =  async(cartItemId:number):Promise<CartResponse>=>{
    const result = await api.delete(`/cart/items/${cartItemId}`)
    return result.data;
}