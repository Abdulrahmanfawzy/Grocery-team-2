import { Button } from "@/components"

interface IProps {
title:string;
description:string;
btnName:string;


}

const HeaderSection=({title,description,btnName}:IProps)=> {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-medium leading-8 text-app-black sm:text-xl">{title}</h1>
            <p className="text-sm leading-6 text-[#4A5565] sm:text-base">{description}</p>
        </div>
          <Button className="w-full sm:w-auto">{btnName}</Button>
    </header>
  )
}

export default HeaderSection