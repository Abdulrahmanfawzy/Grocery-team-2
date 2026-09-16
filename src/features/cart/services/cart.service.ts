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
export const updateCartItem = async(cartItemId:number,quantity:number):Promise<CartResponse>=>{
      console.log("UPDATE URL:", `/cart/items/${cartItemId}`);
  console.log("QUANTITY:", quantity);
    const result = await api.put(`/cart/items/${cartItemId}`,{
        
        quantity,
    })
    return result.data;
}