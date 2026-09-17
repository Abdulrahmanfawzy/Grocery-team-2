
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
        transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]  hover:shadow-[0_10px_24px_rgba(1,65,98,0.25)] motion-reduce:transition-none motion-reduce:hover:transform-none
        
        sm:max-w-[190.86px]">
      <img
        src={icon}
        alt=""
        className="h-6 w-6"
        style={{ filter: "brightness(0) saturate(100%) invert(20%) sepia(21%) saturate(1848%) hue-rotate(160deg) brightness(88%) contrast(101%)" }}
      />
      <h3 className="text-[16px] leading-[120%] text-app-main ">{title}</h3>
      <p className="text-[18px] leading-[120%] text-app-main ">{value}</p>
      
    </div>
  );
};

export default WelcomeCard;