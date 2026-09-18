import { Search } from 'lucide-react'

interface Avatar {
  label: string
  bgClass: string
}

interface SearchBarProps {
  placeholder?: string
  buttonLabel?: string
  avatars?: Avatar[]
  onSearch?: (value: string) => void
  onButtonClick?: () => void
}

export default function SearchBar({
  placeholder = 'Search on Category',
  buttonLabel = 'Find Product',

  onSearch,
  onButtonClick,
}: SearchBarProps) {
  return (
    <div className="flex w-full flex-1 items-center gap-3 rounded-full border-b border-slate-200 bg-white py-2 pl-5 pr-2 shadow-sm">
      {/* Search input */}
      <Search size={18} className="shrink-0 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
      />

      {/* Divider */}
      <div className="h-6 w-px shrink-0 bg-slate-200" />

      {/* Avatars */}

      {/* CTA button */}
      <button
        type="button"
        onClick={onButtonClick}
        className="shrink-0 whitespace-nowrap rounded-md bg-app-main px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
      >
        {buttonLabel}
      </button>
    </div>
  )
}
