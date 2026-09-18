import { cn } from "cn"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      // i change bg-muted to >> bg-app-grey
      className={cn("animate-pulse rounded-md bg-app-grey", className)}
      {...props}
    />
  )
}

export { Skeleton }
