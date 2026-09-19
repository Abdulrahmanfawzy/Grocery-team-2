import CardList from "../components/SmartList/CardList"
import HeaderSection from "../components/SmartList/HeaderSection"
import smartListData from "../data/smartListData"

interface IProps {



}

const SmartLists = ({ }: IProps) => {
  return (
    <section className="max-w-170.5 font-inter">
      <HeaderSection />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-24">
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

    </section>
  )
}

export default SmartLists