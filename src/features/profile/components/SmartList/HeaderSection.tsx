import { Button } from "@/components"

interface IProps {



}

const HeaderSection=({}:IProps)=> {
  return (
    <header className="flex items-center justify-between">
        
        <div className="flex flex-col gap-2">
            <h1 className="text-[24px] leading-9 text-app-black ">Smart Lists & Favorites</h1>
            <p className="text-[16px] leading-6 text-[#4A5565] ">Organize your shopping with custom lists</p>
        </div>
        <Button>+ Create New List</Button>
    </header>
  )
}

export default HeaderSection