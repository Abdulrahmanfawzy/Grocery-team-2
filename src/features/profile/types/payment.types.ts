

export interface SavedCardData {
  id: number;
  brand: "Visa" | "Mastercard";
  lastFour: string;
  expires: string;
}

export interface PaymentMethodData {
  id: number;
  title: string;
  description: string;
  image:  string;
}