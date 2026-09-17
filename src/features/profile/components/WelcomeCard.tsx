
interface WelcomeCardProps {
  icon:string;
  title: string;
  value: string;
 
}

const WelcomeCard = ({
  icon,
  title,
  value,
 
}: WelcomeCardProps) => {
  return (
    <div className=" w-full
        rounded-[10px]
        border-[1.5px]
        border-solid
        bg-[#F7FCFF]
        p-4
        shadow-[2px_2px_4px_0_var(--silver)]
        
        sm:max-w-[190.86px]">
      <img src={icon} />
      <h3 className="text-[16px] leading-[120%] text-app-main ">{title}</h3>
      <p className="text-[18px] leading-[120%] text-app-main ">{value}</p>
      
    </div>
  );
};

export default WelcomeCard;