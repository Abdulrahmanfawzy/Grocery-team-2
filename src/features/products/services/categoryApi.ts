import api from "@/lib/axios";

export interface Category {
  id: number;
  name_en: string;
  name_ar: string;
}

interface CategoriesResponse {
  success: boolean;
  message: string;
  data: Category[];
}

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await api.get<CategoriesResponse>("/categories");

  return response.data;
};