
import sasuImage from "../../../assets/sagu.svg";
import eggImage from "../../../assets/Eggs.svg";
import vColaImage from "../../../assets/Vcola.svg";
import type { Product } from "../types/product.types";

export const cartProducts: Product[] = [
 {
      id: 1,
      name: "Premium Organic Orange - 1KG",
      price: 20,
      quantity: 1,
      image: sasuImage,
      inStock: true,
    },
    {
      id: 2,
      name: "Free Range Eggs - 12 Pieces",
      price: 15,
      quantity: 2,
      image: eggImage,
      inStock: true,
    },
    {
      id: 3,
      name: "Fresh Organic Milk - 1L",
      price: 18,
      quantity: 1,
      image: eggImage,
      inStock: true,
    },
    {
      id: 4,
      name: "Organic Banana - 1KG",
      price: 12,
      quantity: 3,
      image: sasuImage,
      inStock: true,
    },
    {
      id: 5,
      name: "Fresh Farm Eggs - 6 Pieces",
      price: 10,
      quantity: 1,
      image: sasuImage,
      inStock: false,
    },
    {
      id: 6,
      name: "Premium Fresh Orange - 2KG",
      price: 30,
      quantity: 2,
      image: eggImage,
      inStock: true,
    },
    {
      id: 7,
      name: "Organic Spinach - 200G",
      price: 8,
      quantity: 1,
      image: eggImage,
      inStock: true,
    },
    {
      id: 8,
      name: "Fresh Organic Carrots - 500G",
      price: 6,
      quantity: 2,
      image: sasuImage,
      inStock: true,
    }
];
export const exploreProducts: Product[] = [
 {
    id: 1,
    name: "Spiro Spathis Lemon",
    image: vColaImage,
    price: 8.8,
    oldPrice: 11,
    rating: 3.8,
    
    inStock: true,
    discount: 20,
    isNew: true, quantity: 1,
  },
  {
    id: 2,
    name: "V7 Cola - 300Ml",
    image: vColaImage,
    price: 15,
    rating: 4,
    
    inStock: true, quantity: 1,
  },
  {
    id: 3,
    name: "Nestlé Pure Life 6 L",
    image: vColaImage,
    price: 60,
    rating: 5,
   
    inStock: true, quantity: 1,
  },
  {
    id: 4,
    name: "Sparkling Water",
    image: vColaImage,
    price: 25,
    rating: 4.5,
    
    inStock: true, quantity: 1,
  },
  {
    id: 5,
    name: "Fresh Juice",
    image: vColaImage,
    price: 30,
    rating: 4,
   
    inStock: true,
    quantity: 1,
  },
];