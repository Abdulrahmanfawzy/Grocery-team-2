import type { ReactNode } from "react";

export interface RatingUser {
  name: string;
  avatar: string | null;
}

export interface ProductRating {
  id: number;
  comment: string;
  stars: number;
  created_at: string | null;
  user: RatingUser;
}

export interface Product {
  ratings: any;
  id: number;
  name: string;
  type: string;
  brand: string;
  description: string | null;
  how_to_use: string | null;
  image: string[];
  quantity: number;
  price: string;
  discount_price: string | null;
  average_rating: number;
  category: {
    name_en: string;
    id: number;
    name: string;
  };
}

export interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;

  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export interface ProductsResponse {
 success: boolean;
  message: string;
  data: Product[];
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface ProductFilters {
  category_id?: number;
  brand?: string;
  type?: string;
  min_price?: number;
  max_price?: number;
  search?: string;
  page?: number;
  per_page?: number;
}