import { useQuery } from "@tanstack/react-query";
import { fetchBoughtTogether } from "../services/productApi";

export function useBoughtTogether(id: string) {
  return useQuery({
    queryKey: ["bought-together", id],
    queryFn: () => fetchBoughtTogether(id),
    enabled: Boolean(id),
  });
}