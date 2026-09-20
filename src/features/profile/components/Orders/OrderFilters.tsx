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
        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 md:grid-cols-[minmax(0,1fr)_9rem_10.25rem]">
            {/* Search */}
            <div className="relative min-w-0">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                />

                <Input
                    placeholder="Search Orders"
                    className="w-full pl-10"
                />
            </div>
            {/* Status */}
            <Select className="w-full sm:max-w-none!"
                options={statusOptions}
                placeholder="All Status"
            />
            {/* Date */}
            <Select className="w-full sm:max-w-none!"
                options={daysOptions}
                placeholder="Last 30 days"
            />
        </div>
    )
}

export default OrderFilters