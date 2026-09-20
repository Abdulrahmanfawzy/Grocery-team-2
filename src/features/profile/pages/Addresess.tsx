import { BriefcaseBusiness, House } from "lucide-react"
import HeaderSection from "../components/SmartList/HeaderSection"
import AddressCard from "../components/Addresses/AddressCard"
import OrderDelivery from "../components/Addresses/OrderDelivery"

interface IProps {



}

const Addresess = ({ }: IProps) => {
  return (
    <section className="w-full max-w-170.5 font-inter!">
      {/* header */}
      <HeaderSection title="Delivery Addresses" description="Manage your delivery locations and preferences" btnName="+ Add Address" />
      <AddressCard
        icon={House}
        label="Home"
        address="Villa 14, Street 23, District 5, New Cairo, Cairo"
        instructions="Ring doorbell. Leave at door if no answer."
      />
      <AddressCard
        icon={BriefcaseBusiness}
        label="Work"
        address="Office 9, Floor 2, 26 Talaat Harb Street, Downtown Cairo, 11511"
        instructions="Ring doorbell. Leave at door if no answer."
      />

      <OrderDelivery />
    </section>
  )
}

export default Addresess