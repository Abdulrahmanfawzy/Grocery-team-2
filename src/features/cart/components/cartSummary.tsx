import type { Product } from "../types/product.types";
import DeliveryDetails from "./deliveryDetails";
import TotalAmount from "./totalAmount";

interface CartSummaryProps {
    products: Product[];
}

const CartSummary = ({ products }: CartSummaryProps) => {
    const shipping = 40;
    const subtotal = products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0,
    );

    return (
        <div className="mt-6 mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TotalAmount subtotal={subtotal} shipping={shipping} />
            <DeliveryDetails />
        </div>
    );
};

export default CartSummary;
