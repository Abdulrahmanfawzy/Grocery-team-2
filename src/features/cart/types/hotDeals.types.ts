export interface IHotDealProduct {
  id: number;
  name: string;
  type: string;
  brand: string;
  description: string;
  how_to_use: string | null;
  image: string[];
  quantity: number;
  price: string;
  discount_price: string;
  discount_percentage: number;
  average_rating: number;
  category: {
    id: number;
    name: string;
  };
}

export interface IHotDealsPagination {
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

export interface IHotDealsResponse {
  success: boolean;
  message: string;
  data: IHotDealProduct[];
  pagination: IHotDealsPagination;
}