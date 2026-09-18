import { useSearchParams } from "react-router-dom";
import type { ProductFilters } from "../types/product.types";

export function useProductFilter() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const filters: ProductFilters = {
    category: searchParams.get("category")
      ? Number(searchParams.get("category"))
      : undefined,

    brand:
      searchParams.get("brand") || undefined,

    type:
      searchParams.get("type") || undefined,

    min_price: searchParams.get("min_price")
      ? Number(searchParams.get("min_price"))
      : undefined,

    max_price: searchParams.get("max_price")
      ? Number(searchParams.get("max_price"))
      : undefined,

    search:
      searchParams.get("search") || undefined,

    page: searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1,

    per_page: searchParams.get("per_page")
      ? Number(searchParams.get("per_page"))
      : 10,
  };

  return {
    filters,
    searchParams,
    setSearchParams,
  };
}
