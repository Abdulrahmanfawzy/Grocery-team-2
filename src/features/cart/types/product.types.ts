export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
  oldPrice?: number;
  rating?: number;
  isNew?: boolean;
  reviews?: number;
  discount?: number; 
}
