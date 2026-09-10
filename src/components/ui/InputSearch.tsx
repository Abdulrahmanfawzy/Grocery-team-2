import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ChevronDown, Search } from 'lucide-react'

const categories = ['All Categories', 'Electronics', 'Fashion', 'Home']

const SearchInput = () => {
  const [category, setCategory] = useState('All Categories')
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      category,
      searchQuery,
    })
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center rounded-xl border border-gray-300/50 bg-[#E6E6E6] p-0.5 shadow-sm overflow-hidden"
      >
        {/* Category Selector */}
        <div className="relative flex items-center shrink-0">
          <select
            value={category}
            onChange={handleCategoryChange}
            aria-label="Select category"
            className="z-10 max-w-27.5 sm:max-w-40 cursor-pointer appearance-none truncate bg-transparent py-2 pl-2.5 pr-6 sm:pl-4 sm:pr-8 text-xs sm:text-sm font-bold text-gray-900 focus:outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item} className="bg-white text-gray-900 font-normal">
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            className="pointer-events-none absolute right-1.5 sm:right-2 h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5] text-gray-800"
            aria-hidden="true"
          />
        </div>

        {/* Divider */}
        <div className="mx-0.5 sm:mx-1 h-5 w-px bg-gray-400/60 shrink-0" aria-hidden="true" />

        {/* Search Input */}
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for items...."
          aria-label="Search for items"
          className="w-full flex-1 min-w-0 bg-transparent px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          aria-label="Search"
          className="flex shrink-0 items-center justify-center rounded-r-[10px] rounded-l-sm bg-[#0E426A] p-2 sm:p-2.5 text-white transition-colors hover:bg-[#0a3353]"
        >
          <Search className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

export default SearchInput