import type { SavedCardData } from "../../types/payment.types";

interface SavedCardProps {
  card: SavedCardData;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const SavedCard = ({
  card,
  isSelected,
  onSelect,
}: SavedCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(card.id)}
      className={`
        w-full rounded-lg border bg-white
        px-3 py-2.5 text-left
        transition-all duration-200
        ${
          isSelected
            ? "border-[#014162] shadow-sm"
            : "border-[#E5E7EB] hover:border-[#014162]/50"
        }
      `}
    >
      <div className="flex items-center gap-3">
        {/* Card Brand */}
        <div className="flex w-7 shrink-0 justify-center">
          {card.brand === "Visa" ? (
            <span className="text-[8px] font-bold text-[#1A3B8F]">
              VISA
            </span>
          ) : (
            <div className="flex">
              <span className="h-3 w-3 rounded-full bg-[#EA001B]" />
              <span className="-ml-1.5 h-3 w-3 rounded-full bg-[#FF9900]" />
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[12px] font-medium text-[#111827]">
            {card.brand} •••• {card.lastFour}
          </p>

          <p className="mt-0.5 text-[9px] text-[#9CA3AF]">
            Expires {card.expires}
          </p>
        </div>
      </div>
    </button>
  );
};

export default SavedCard;