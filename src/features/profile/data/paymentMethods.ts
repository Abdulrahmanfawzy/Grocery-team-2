import cashIcon from '../../../assets/cash.svg'
import applePayIcon from '../../../assets/apple-pay.svg'
import googlePayIcon from '../../../assets/google-pay.svg'
import walletIcon from '../../../assets/wallet-pay.svg'
import type {
  PaymentMethodData,
  SavedCardData,
} from "../types/payment.types";

export const savedCards: SavedCardData[] = [
  {
    id: 1,
    brand: "Visa",
    lastFour: "4242",
    expires: "12/25",
  },
  {
    id: 2,
    brand: "Mastercard",
    lastFour: "8888",
    expires: "08/26",
  },
];

export const paymentMethods: PaymentMethodData[] = [
  {
    id: 1,
    title: "Cash on Delivery",
    description: "Pay when you receive your order",
    image: cashIcon,
  },
  {
    id: 2,
    title: "Apple Pay",
    description: "Quick checkout with Apple Pay",
    image: applePayIcon,
  },
  {
    id: 3,
    title: "Google Pay",
    description: "Quick checkout with Google Pay",
    image: googlePayIcon,
  },
  {
    id: 4,
    title: "Wallet Pay",
    description: "Digital wallet payment",
    image: walletIcon,
  },
];