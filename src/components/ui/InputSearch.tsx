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
    <form
      onSubmit={handleSubmit}
      className="relative flex h-10 w-full items-center overflow-hidden rounded-xl border border-gray-300/50 bg-[#E6E6E6] p-0.5 shadow-sm sm:h-12"
    >
      {/* Category Selector */}
      <div className="relative flex h-full items-center shrink-0">
        <select
          value={category}
          onChange={handleCategoryChange}
          aria-label="Select category"
          className="z-10 max-w-28 cursor-pointer appearance-none truncate bg-transparent py-3 pl-3 pr-7 text-sm font-bold text-gray-900 focus:outline-none sm:max-w-44 sm:pl-4 sm:pr-9 sm:text-base"
        >
          {categories.map((item) => (
            <option key={item} value={item} className="bg-white text-gray-900 font-normal">
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-1.5 h-4 w-4 stroke-[2.5] text-gray-800 sm:right-2 sm:h-5 sm:w-5"
          aria-hidden="true"
        />
      </div>

      {/* Divider */}
      <div className="mx-1 h-6 w-px shrink-0 bg-gray-400/60 sm:mx-1.5 sm:h-7" aria-hidden="true" />

      {/* Search Input */}
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for items...."
        aria-label="Search for items"
        className="h-full min-w-0 w-full flex-1 bg-transparent px-3 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none sm:px-4 sm:text-base"
      />

      {/* Search Button */}
      <button
        type="submit"
        aria-label="Search"
        className="flex h-full shrink-0 items-center justify-center rounded-r-[10px] rounded-l-sm bg-[#0E426A] px-4 text-white transition-colors hover:bg-[#0a3353] sm:px-5"
      >
        <Search className="h-5 w-5 stroke-[2.5] sm:h-6 sm:w-6" aria-hidden="true" />
      </button>
    </form>
  )
}

export default SearchInput
