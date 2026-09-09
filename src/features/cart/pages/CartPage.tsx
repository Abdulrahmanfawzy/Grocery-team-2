import { Breadcrumb } from "@/components/common/Breadcrumb"


interface IProps {



}

const CartPage=({}:IProps)=> {
  return (
    <div className="bg-white min-h-screen">
    <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-6 lg:py-10 ">

   <Breadcrumb 
        items={[{ label: "Home", path: "/" }
        , { label: "Cart" }]} />



    </div>
    </div>
  )
}

export default CartPage