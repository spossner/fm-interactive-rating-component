import { useState } from "react";
import { RatingForm } from "./RatingForm";
import { RatingSummary } from "./RatingSummary";

export const RatingBox = () => {
  const [rating, setRating] = useState<number | undefined>();

  return (
    <div className="h-[360px] w-[327px] rounded-3xl bg-dark-gradient p-6 text-base md:h-[416px] md:w-[412px] md:p-8">
      {rating ? (
        <RatingSummary rating={rating} />
      ) : (
        <RatingForm setRating={setRating} />
      )}
    </div>
  );
};
