export interface Category {
  id: number;
  name_en: string;
  name_ar: string;
  image: string;
  parent_id: number | null;
}

export interface CategoriesResponse {
  success: boolean;
  message: string;
  data: Category[];
}