
import { Button } from "@/components";
import type { LucideIcon } from "lucide-react";

interface IProps {
    icon: LucideIcon;
    title: string;
    primaryText: string;
    secondaryText: string;
    value: string;
    stackValue?: boolean;
    topButtonText: string;
    bottomButtonText: string;
    onView?: () => void;
    onAction?: () => void;
}

const ActivityCard = ({
        icon: Icon,
        title,
        primaryText,
        secondaryText,
        value,
        stackValue = false,
        topButtonText,
        bottomButtonText,
        onView,
        onAction,
    }: IProps) => {
        return (
            <div className="sm:max-w-85 w-full h-60 rounded-[8px] border-[0.8px] border-[#DAD8D8] p-6 ">

                {/* Header */}
                <div className="flex items-center justify-between gap-6">
                    <Icon className="h-5 w-5 text-[#112D4E]" />

                    <h3 className="text-[18px] leading-[120%] text-app-main">
                        {title}
                    </h3>

                    <Button
                        size="sm"
                        variant="secondary"
                        className="text-app-main! hover:text-white! px-1.5 py-2"
                        onClick={onView}
                    >
                        {topButtonText

                        }
                    </Button>
                </div>

                {/* Details */}
                <div>
                    <div className={`mt-3 flex max-w-70.5 rounded-10 bg-white p-3 shadow-[0px_2px_4px_0px_#01416240] ${stackValue ? "flex-col items-start gap-1" : "items-center justify-between"}`}>

                        <div className="flex flex-col gap-1">
                            <p className="text-[16px] leading-[120%] text-app-black">
                                {primaryText}
                            </p>

                            <p className="text-[12px] leading-[150%] text-app-black">
                                {secondaryText}
                            </p>
                        </div>

                        <p className={stackValue ? "text-[12px] leading-[150%] text-app-black" : ""}>{value}</p>
                    </div>

                    <Button
                        size="md"
                        className="mt-3 w-full"
                        onClick={onAction}
                    >
                        {bottomButtonText}
                    </Button>
                </div>
            </div>
        );
    };
export default ActivityCard;