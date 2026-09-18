
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
            <div className="flex min-h-60 w-full flex-col rounded-[8px] border-[0.8px] border-[#DAD8D8] p-4 sm:p-6">

                {/* Header */}
                <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#112D4E]" />

                    <h3 className="min-w-0 flex-1 text-[16px] leading-[120%] text-app-main sm:text-[18px]">
                        {title}
                    </h3>

                    <Button
                        size="sm"
                        variant="secondary"
                        className="shrink-0 px-1.5 py-2 text-app-main! hover:text-white!"
                        onClick={onView}
                    >
                        {topButtonText

                        }
                    </Button>
                </div>

                {/* Details */}
                <div>
                    <div className={`mt-3 flex w-full rounded-10 bg-white p-3 shadow-[0px_2px_4px_0px_#01416240] ${stackValue ? "flex-col items-start gap-1" : "items-center justify-between gap-2"}`}>

                        <div className="flex flex-col gap-1">
                            <p className="break-words text-[16px] leading-[120%] text-app-black">
                                {primaryText}
                            </p>

                            <p className="text-[12px] leading-[150%] text-app-black">
                                {secondaryText}
                            </p>
                        </div>

                        <p className={`break-words ${stackValue ? "text-[12px] leading-[150%]" : "text-[14px] sm:text-[16px]"} text-app-black`}>{value}</p>
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