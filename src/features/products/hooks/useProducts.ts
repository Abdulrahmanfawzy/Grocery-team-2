import {
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";

import { fetchProducts } from "../services/productApi";
import type { ProductFilters } from "../types/product.types";

export function useProducts(
  filters: ProductFilters = {}
) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),

    // Keep the old products visible while fetching
    // the new filtered products.
    placeholderData: keepPreviousData,
  });
}

