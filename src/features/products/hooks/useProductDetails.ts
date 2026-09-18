import { useQuery } from "@tanstack/react-query";

import { fetchProductById } from "../services/productApi";

export function useProductDetails(id: string) {
  return useQuery({
    queryKey: ["product", id],

    queryFn: () => fetchProductById(id),

    enabled: Boolean(id),
  });
}