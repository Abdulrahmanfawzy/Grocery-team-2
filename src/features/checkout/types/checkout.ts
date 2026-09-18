export interface CartItemType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;

  address: string;
  city: string;
  province: string;
  postalCode: string;

  addressId: number;

  fulfillment: 'delivery' | 'pickup';
  scheduleDelivery: 'deliver_now' | 'schedule';
  deliverySpeed: 'standerd' | 'priority';

  deliveryDate: string;
  deliveryTime: string;
  notes: string;
  saveInfo?: boolean
}

export type FulfillmentType = 'delivery' | 'pickup';

export type ScheduleDelivery = 'deliver_now' | 'schedule';

export type DeliverySpeed = 'standard' | 'priority';

export interface CheckoutPayload {
  address_id: number;
  fulfillment_type: FulfillmentType;
  schedule_delivery: ScheduleDelivery;
  delivery_speed: DeliverySpeed;
}

export interface CheckoutResponse {
  message?: string;
  data?: unknown;
  [key: string]: unknown;
}