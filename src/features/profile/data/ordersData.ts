import type { Order } from "../types/orders.types";
import orangeImg from "../../../assets/orange.svg"
import bananaImg from "../../../assets/banana.svg"

export const orders: Order[] = [
  {
    id: "GP001",
    date: "Nov 24, 2025",
    itemsCount: 6,
    status: "completed",
    total: 250,
    items: [
      {
        id: "1",
        name: "Prem...Orange",
        image: orangeImg,
        quantity: 1,
      },
      {
        id: "2",
        name: "Prem...Banana",
        image:bananaImg,
        quantity: 1,
      },
    ],
  },

  {
    id: "GP002",
    date: "Nov 20, 2025",
    itemsCount: 8,
    status: "completed",
    total: 450,
    items: [
      {
        id: "3",
        name: "Eggs",
        image: orangeImg,
        quantity: 1,
      },
      {
        id: "4",
        name: "Milk",
        image: bananaImg,
        quantity: 2,
      },
    ],
  },
];