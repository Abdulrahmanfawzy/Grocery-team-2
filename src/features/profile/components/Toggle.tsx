interface ToggleProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export function Toggle({ checked, onToggle, disabled = false }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
        checked ? 'bg-[#014162]' : 'bg-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
