import type { CartItemType } from "../types/checkout";

export const initialCart: CartItemType[] = [
  {
    id: 1,
    name: 'Premium Organic Orange',
    description: '1 KG',
    image: '/images/products/orange.png',
    price: 20,
    quantity: 1,
    unit: 'KG',
  },
  {
    id: 2,
    name: 'Sausage With Fat',
    description: 'Balady',
    image: '/images/products/sausage.png',
    price: 400,
    quantity: 1,
    unit: 'KG',
  },
  {
    id: 3,
    name: 'COOKS - SALT',
    description: '400G',
    image: '/images/products/salt.png',
    price: 12,
    quantity: 4,
    unit: 'PCS',
  },
  {
    id: 4,
    name: 'Zanaty White Eggs',
    description: '30 Pieces',
    image: '/images/products/eggs.png',
    price: 189,
    quantity: 1,
    unit: 'BOX',
  },
];