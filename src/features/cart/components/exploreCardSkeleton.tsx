
import { Skeleton } from "@/components/ui/skeleton";

const ExploreCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-gray-200 bg-white p-4">
      {/* Product Image */}
      <Skeleton className="h-52 w-full rounded-xl" />

      {/* Product Info */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <Skeleton className="h-10 w-32 rounded-[8px]" />
        <Skeleton className="h-10 w-20 rounded-[8px]" />
      </div>
    </div>
  );
};

export default ExploreCardSkeleton;

