import { Button } from "@/components"

interface IProps {



}

const HeaderSection=({}:IProps)=> {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex flex-col gap-2">
            <h1 className="text-xl leading-8 text-app-black sm:text-2xl">Smart Lists & Favorites</h1>
            <p className="text-sm leading-6 text-[#4A5565] sm:text-base">Organize your shopping with custom lists</p>
        </div>
          <Button className="w-full sm:w-auto">+ Create New List</Button>
    </header>
  )
}

export default HeaderSection