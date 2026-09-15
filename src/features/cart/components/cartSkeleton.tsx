import { Skeleton } from "@/components/ui/skeleton";

import CartSummarySkeleton from "./cartSummarySkeleton";
import CartProductSkeleton from "./cartProductSkelton";

const CartSkeleton = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-6 sm:px-10 lg:px-16 lg:py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <span className="text-app-grey">/</span>
          <Skeleton className="h-4 w-10" />
        </div>

        {/* Products */}
        <div className="w-full">
          <Skeleton className="mt-6 h-6 w-36" />

          <div className="mt-4 w-full rounded-md border border-gray-200 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <CartProductSkeleton showDivider />
              <CartProductSkeleton />
              <CartProductSkeleton showDivider />
              <CartProductSkeleton />
            </div>
          </div>
        </div>

        {/* Summary */}
        <CartSummarySkeleton />

      </div>
    </div>
  );
};

export default CartSkeleton;