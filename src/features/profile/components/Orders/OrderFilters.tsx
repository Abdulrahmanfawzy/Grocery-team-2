import { Input, Select } from "@/components"
import { Search } from "lucide-react";
interface IProps {



}

const OrderFilters = ({ }: IProps) => {
    const statusOptions = [
        {
            value: "all",
            label: "All Status",
        },
        {
            value: "completed",
            label: "Completed",
        },
        {
            value: "cancelled",
            label: "Cancelled",
        },
    ];
    const daysOptions = [
        {
            value: "Last 10 days",
            label: "Last 10 days",
        },
        {
            value: "Last 15 days",
            label: "Last 15 days",
        },
        {
            value: "Last 30 days",
            label: "Last 30 days",
        },
    ];
    return (
        <div className="grid md:grid-cols-3 gap-6 p-4">
            {/* Search */}
            <div className="relative">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                />

                <Input
                    placeholder="Search Orders"
                    className="pl-10 w-45.25!"
                />
            </div>
            {/* Status */}
            <Select className="max-w-34!  "
                options={statusOptions}
                placeholder="All Status"
            />
            {/* Date */}
            <Select className=" max-w-40.75! "
                options={daysOptions}
                placeholder="Last 30 days"
            />
        </div>
    )
}

export default OrderFilters