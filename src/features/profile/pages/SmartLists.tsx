import CardList from "../components/SmartList/CardList"
import FavouriteItems from "../components/SmartList/FavouriteItems"
import HeaderSection from "../components/SmartList/HeaderSection"
import smartListData from "../data/smartListData"

interface IProps {



}

const SmartLists = ({ }: IProps) => {
  return (
    <section className="w-full max-w-170.5 font-inter">
      <HeaderSection 
      title="Smart Lists & Favorites"
       description="Organize your shopping with custom lists" btnName="+ Create New List" />
      {/* smart list */}
      <div className="mt-8 mb-5 grid grid-cols-1 gap-4 sm:gap-6 md:mt-12 md:grid-cols-2">
        {smartListData.map((list) => (
          <CardList
            key={list.nameList}
            image={list.image}
            nameList={list.nameList}
            numOfItems={list.numOfItems}
            timeOfUpdate={list.timeOfUpdate}
          />
        ))}
      </div>
      {/* favourite Items */}
      <FavouriteItems />

    </section>
  )
}

export default SmartLists