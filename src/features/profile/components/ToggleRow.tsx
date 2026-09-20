import { Toggle } from './Toggle';

interface ToggleRowProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
  showBorder?: boolean;
}

export function ToggleRow({
  label,
  checked,
  onToggle,
  disabled = false,
  showBorder = true,
}: ToggleRowProps) {
  return (
    <div
      className={`flex items-center justify-between ${
        showBorder ? 'pb-3 border-b border-gray-200/60' : ''
      }`}
    >
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <Toggle checked={checked} onToggle={onToggle} disabled={disabled} />
    </div>
  );
}
