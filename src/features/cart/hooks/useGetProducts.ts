
import axios from 'axios'

import { useQuery } from '@tanstack/react-query';
import type { CartResponse } from '../types/cart.types';

const BASE_URL = import.meta.env.VITE_BASE_URL?.trim();
const TOKEN = import.meta.env.VITE_TOKEN?.trim();

const fetchProductsCart=async():Promise<CartResponse>=>{
    const result = await axios.get<CartResponse>(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
    return result.data;
}
const useGetProducts=()=> {
    const query=useQuery({
        queryKey:['cart'],
        queryFn:fetchProductsCart
    });

  return query;
}

export default useGetProducts