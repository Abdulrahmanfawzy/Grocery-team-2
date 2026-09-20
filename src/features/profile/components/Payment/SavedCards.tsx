import { useState } from "react";
import { Plus } from "lucide-react";


import SavedCard from "./SavedCard";
import { savedCards } from "../../data/paymentMethods";

const SavedCards = () => {
  const [selectedCard, setSelectedCard] = useState<number|any>(
    savedCards[1]?.id ?? savedCards[0]?.id
  );

  const handleSelectCard = (id: number) => {
    setSelectedCard(id);
  };

  const handleAddCard = () => {
    console.log("Add new card");
  };

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-[#111827]">
        Saved Cards
      </h2>

      <div className="flex flex-col gap-2.5">
        {savedCards.map((card) => (
          <SavedCard
            key={card.id}
            card={card}
            isSelected={selectedCard === card.id}
            onSelect={handleSelectCard}
          />
        ))}

        <button
          type="button"
          onClick={handleAddCard}
          className="
            flex h-10 w-full items-center gap-3
            rounded-lg border border-[#E5E7EB]
            px-3
            text-left text-xs text-[#374151]
            transition-colors
            hover:border-[#014162]
            hover:text-[#014162]
          "
        >
          <Plus
            size={15}
            strokeWidth={1.5}
            className="text-[#4C9B6B]"
          />

          <span>Add New Card</span>
        </button>
      </div>
    </section>
  );
};

export default SavedCards;