export interface Settings {
  id: number;
  language: string;
  mode: string;
  order_updated: number;
  promotional_email: number;
  nutrition_insights: number;
  price_alerts: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface NotificationPreferences {
  id: number;
  user_id: number;
  order_confirmation: boolean;
  order_shipped: boolean;
  delivery_updates: boolean;
  push_notifications: boolean;
  account_security_alerts: boolean;
  payment_billing_notifications: boolean;
  cart_reminders: boolean;
  out_of_stock_alerts: boolean;
  sms_notifications: boolean;
  email_notifications: boolean;
  created_at: string;
  updated_at: string;
}

export interface PersonalInfoData {
  settings: Settings;
  notification_preferences: NotificationPreferences;
}

export interface PersonalInfoResponse {
  success: boolean;
  message: string;
  data: PersonalInfoData;
}
