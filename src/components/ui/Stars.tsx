import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const fillPercentage = Math.min(
          Math.max(rating - index, 0),
          1
        ) * 100;

        return (
          <div key={index} className="relative h-5 w-5">
            {/* Gray star */}
            <Star
              className="absolute h-5 w-5 text-gray-300"
              fill="currentColor"
            />

            {/* Rating fill */}
            <div
              className="absolute left-0 top-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;