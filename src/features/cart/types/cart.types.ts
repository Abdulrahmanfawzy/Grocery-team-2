export interface Product {
  id: number;
  category_id: number;
  name: string;
  descreption: string;
  how_to_use: string;
  image: string;
  quantity: number;
  price: string;
  discount_price: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface CartItem {
  id: number;
  cart_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  product: Product;
}

export interface Cart {
  id: number;
  user_id: number;
  created_at: string;
  items: CartItem[];
}

export interface CartResponse {
  success: boolean;
  message: string;
  data: Cart;
}

// post item to cart
export interface CartItemResponse{
  success:boolean;
  message:string;
  data:Omit<CartItem,"product">;
}



export type CartProduct = Product & {
  cartItemId: number;
};