import { Skeleton } from "@/components/ui/skeleton";

const CartSummarySkeleton = () => {
  return (
    <div className="mt-8">
      <Skeleton className="h-6 w-32" />

      <div className="mt-4 rounded-md border border-gray-200 p-5">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>

        <div className="mt-4 flex justify-between">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-20" />
        </div>

        <div className="mt-6 h-px w-full bg-gray-200" />

        <div className="mt-5 flex justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>

        <Skeleton className="mt-5 h-11 w-full rounded-md" />
      </div>
    </div>
  );
};

export default CartSummarySkeleton;