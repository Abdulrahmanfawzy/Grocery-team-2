import { Button } from "@/components";
import emptyCart from "../../../assets/emptyCart.jpg"
import { Link } from "react-router-dom";
const EmptyCart = () => {
    return (
        <div className="flex min-h-87.5 w-full flex-col items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-center">
            <img
                src={emptyCart}
                alt="Empty cart"
                className="mb-5 h-52 w-52 object-contain"
            />

            <h2 className="text-[20px] font-semibold text-app-main">
                Your Cart is Empty
            </h2>

            <p className="mt-2 max-w-md text-[14px] text-app-grey">
                You don't have any products in your cart yet.
            </p>

            <Button
                size="md"
                className="my-6 "
            >
                <Link to="/products">
                    Continue Shopping
                </Link>
            </Button>
        </div>
    );
};

export default EmptyCart;