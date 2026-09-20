import { Button } from "@/components"
import { SquarePen, Trash, Truck, type LucideIcon } from "lucide-react"

interface AddressCardProps {
  icon: LucideIcon
  label: string
  address: string
  instructions: string
}

const AddressCard = ({ icon: AddressIcon, label, address, instructions }: AddressCardProps) => {
  return (
    <article className="mt-4 rounded-lg border-[0.8px] border-[#DAD8D8] bg-[#F7FCFF] p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1">
          <AddressIcon className="h-6 w-6 text-app-main" />
          <p className="text-base leading-[120%] text-app-black">{label}</p>
        </div>

        <div className="flex w-full gap-3 sm:w-auto">
          <Button variant="secondary" className="flex-1 text-base! leading-[120%]! text-app-main! hover:text-white! sm:flex-none">
            <SquarePen className="mr-2 h-4! w-4!  " />
            Edit
          </Button>
          <Button variant="secondary" className="flex-1 text-base! leading-[120%]! text-app-main! hover:text-white! sm:flex-none">
            <Trash className="mr-2 h-4! w-4! " />
            Cancel
          </Button>
        </div>
      </div>

      <p className="mt-2 px-1 text-base leading-[120%] text-[#888888] sm:px-8">{address}</p>

      <div className="relative mt-4 rounded-lg border-[0.8px] border-[#E5E4E4] bg-[#E5E4E4] p-4">
        {/* to remove bottom left corner */}
        <div className="absolute -bottom-px -right-px border-b-35 border-b-[#f7fcff] border-l-35 border-l-transparent" />
        {/* to display triangle in opposite way */}
        <div className="absolute -bottom-0.5 -right-0.5 rounded-[10px] border-r-37 border-r-transparent border-t-37 border-t-[#DAD8D8]" />

        <div className="flex items-center">
          <Truck className="pr-2 text-app-main" />
          <p className="text-base leading-[120%] text-app-main">Delivery Instructions</p>
        </div>
        <p className="ml-6 mt-3 text-base leading-[120%] text-app-main">{instructions}</p>
      </div>
    </article>
  )
}

export default AddressCard
