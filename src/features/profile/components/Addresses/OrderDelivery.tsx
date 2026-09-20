import { useState } from "react";
import DeliveryWindow from "./DeliveryWindow";

const deliveryOptions = [
  {
    id: "morning",
    title: "Morning",
    time: "8:00 AM - 12:00 PM",
  },
  {
    id: "afternoon",
    title: "Afternoon",
    time: "12:00 PM - 5:00 PM",
  },
  {
    id: "evening",
    title: "Evening",
    time: "5:00 PM - 8:00 PM",
  },
];

const OrderDelivery = () => {
  const [selectedWindows, setSelectedWindows] = useState<string[]>([
    "morning",
    "evening",
  ]);

  return (
    <DeliveryWindow
      options={deliveryOptions}
      selectedIds={selectedWindows}
      onChange={setSelectedWindows}
    />
  );
};

export default OrderDelivery;