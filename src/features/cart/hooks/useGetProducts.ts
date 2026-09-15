
import { useQuery } from '@tanstack/react-query';
import { fetchProductsCart } from '../services/cart.service';



const useGetCart=()=> {
    const query=useQuery({
        queryKey:['cart'],
        queryFn:fetchProductsCart
    });

  return query;
}

export default useGetCart