import type { CartItemResponse, CartResponse } from "../types/cart.types";
import api from "../utils/axios";

export const fetchProductsCart=async():Promise<CartResponse>=>{
    const result = await api.get<CartResponse>("/cart");
    return result.data;
}
export const addCartItem = async(productId:number,quantity:number):Promise<CartItemResponse>=>{
    const result = await api.post('/cart/items',{
        product_id: productId,
        quantity,
    })
    return result.data;
}