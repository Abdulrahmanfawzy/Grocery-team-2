import type { LucideIcon } from "lucide-react";


interface InsightCardProps {
  icon: LucideIcon | string;
  secondaryIcon?: string;
  label: string;
  value: string;
  description: string;
}

const InsightCard = ({
  icon: Icon,
  secondaryIcon,
  label,
  value,
  description,
}: InsightCardProps) => {
  const renderImageIcon = (source: string, className: string) => (
    <img
      src={source}
      alt=""
      className={className}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );

  return (
    <div className="flex h-37.5 flex-1 flex-col justify-between rounded-[10px] bg-[#014162] p-4 text-white gap-2 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0b5273] hover:shadow-[0_10px_24px_rgba(1,65,98,0.25)] motion-reduce:transition-none motion-reduce:hover:transform-none">
        
      <div className="flex w-full items-center justify-between">

      <div className="flex w-full items-center justify-between">
       {typeof Icon === "string" ? (
         renderImageIcon(Icon, "h-6 w-6")
       ) : (
         <Icon size={26} strokeWidth={1.5} />
       )}
       {secondaryIcon && renderImageIcon(secondaryIcon, "h-4 w-4")}
      </div>

        
      </div>
       <span className="text-[16px] leading-[120%] text-[#F7FCFF] ">{label}</span>

      <p className="text-[18px] leading-[120%] text-[#F7FCFF]">{value}</p>

      <span className="text-[12px] leading-[150%] text-[#F7FCFF]">{description}</span>
    </div>
  );
};

export default InsightCard;