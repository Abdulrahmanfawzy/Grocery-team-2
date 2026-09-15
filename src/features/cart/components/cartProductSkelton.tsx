import { Skeleton } from "@/components/ui/skeleton";

interface CartProductSkeletonProps {
  showDivider?: boolean;
}

const CartProductSkeleton = ({
  showDivider = false,
}: CartProductSkeletonProps) => {
  return (
    <div
      className={`relative flex min-h-27.5 w-full items-center border-b border-[#D1D5DC] px-3 py-5 sm:px-4 ${
        showDivider
          ? "after:absolute after:right-0 after:top-4 after:bottom-4 after:hidden after:w-px after:bg-[#D1D5DC] sm:after:block"
          : ""
      }`}
    >
      <div className="flex w-full items-center gap-3">
        {/* Image */}
        <div className="flex w-22 shrink-0 flex-col items-center gap-2 sm:w-25">
          <Skeleton className="h-14 w-14 rounded-md sm:h-16 sm:w-16" />

          <Skeleton className="h-6.5 w-15 rounded-tl-[15px] rounded-br-[15px]" />
        </div>

        {/* Product Info */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <Skeleton className="h-5 w-3/4" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-5 w-6" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>

            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductSkeleton;