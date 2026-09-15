import type { CartResponse } from "../types/cart.types";
import api from "../utils/axios";

export const fetchProductsCart=async():Promise<CartResponse>=>{
    const result = await api.get<CartResponse>("/cart");
    return result.data;
}