import { api } from "@/lib/axios";

import type {
  Product,
  ProductFilters,
  ProductsResponse,
} from "../types/product.types";

export const fetchProducts = async (
  filters?: ProductFilters
): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>(
    "/products",
    {
      params: filters,
    }
  );

  return response.data;
};

export const fetchProductById = async (
  id: string
): Promise<Product> => {
  const response = await api.get<{ data: Product }>(
    `/products/${id}`
  );

  return response.data.data;
};

export const fetchBoughtTogether = async (
  id: string
): Promise<Product[]> => {
  const response = await api.get<{ data: Product[] }>(
    `/products/${id}/bought-together`
  );

  return response.data.data;
};