import CategoryList from './components/CategoryList'
import { categories } from './constants/Products'
import SearchBar from './components/SearchCategories'
import ProductsCategories from './components/ProductsCategories';
import HeroOrganic from './components/HeroOrganic';
const Category = () => {
  return (
    <section className="w-full min-w-0 overflow-x-hidden pt-10">
<<<<<<< Updated upstream
      <main className="container mx-auto flex w-full min-w-0 max-w-[85%] flex-col gap-7">
        <div className="w-full max-w-[98%] mx-auto">
=======
      <main className="box-container mx-auto flex w-full min-w-0 max-w-[85%] flex-col gap-7">
        <div className="w-full  box-container">
>>>>>>> Stashed changes
          <SearchBar />
        </div>
        <div className="flex flex-col gap-10 min-w-0!">
          <CategoryList categories={categories} />
          <ProductsCategories title={"Meats"}  per_page={10} category_id={13} /> 
          <ProductsCategories title={"Meats"}  per_page={10} category_id={4} /> 
          <ProductsCategories title={"Meats"}  per_page={10} category_id={13} /> 
          <HeroOrganic/>
        </div>
      </main>
    </section>
  )
}

export default Category
