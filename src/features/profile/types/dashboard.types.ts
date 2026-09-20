export interface LoyaltyPoints {
  message: string;
  orders_counted: number;
  points: number;
}

export interface LastOrder {
  total: string;
  total_items: string;
  last_purchase: string;
}

export interface DeliveryTime {
  date: string | null;
  time: string | null;
  delivery_id: number | null;
  order_id: number | null;
}

export interface MonthlySpend {
  monthly_spend: number;
  previous_month_spend: number;
  percentage: number;
}

export interface MonthlyOrders {
  orders_count: number;
  average_days_between_orders: number | null;
}

export interface CategoryPurchasePercentage {
  category_id: number;
  category: string;
  orders_count: number;
  percentage: number;
}

export interface TopPurchase {
  id: number;
  name: string;
  image: string;
  purchase_count: number;
}

export interface RecentOrder {
  id: number;
  status: string;
  items_count: number;
  total: number;
  delivery_time: string | null;
}

export interface DashboardData {
  track_order: number;
  loyalty_points: LoyaltyPoints;
  average_order_total: number;
  last_order: LastOrder;
  delivery_time: DeliveryTime;
  monthly_spend: MonthlySpend;
  monthly_orders: MonthlyOrders;
  total_saving: number;
  average_order_value: number;
  category_purchase_percentage: CategoryPurchasePercentage[];
  top_purchases: TopPurchase[];
  recent_orders: RecentOrder[];
}

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}
