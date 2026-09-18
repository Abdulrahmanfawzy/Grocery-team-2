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
  id: number;

  category: {
    id: number;
    name_en: string;
    name_ar: string;
  };

  name: string;
  type: string;
  brand: string;

  description: string;
  how_to_use: string | null;

  images: string[];

  quantity: number;

  price: string;
  discount_price: string | null;

  average_rating: number;

  ratings: ProductRating[];
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
  category?: number;
  brand?: string;
  type?: string;
  min_price?: number;
  max_price?: number;
  search?: string;
  page?: number;
}