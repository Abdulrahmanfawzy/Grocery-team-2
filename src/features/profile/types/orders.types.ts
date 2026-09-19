export type OrderStatus ="completed"| "pending"| "cancelled";

export interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  itemsCount: number;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
}