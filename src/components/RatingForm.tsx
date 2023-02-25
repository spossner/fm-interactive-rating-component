import { type NextPage } from "next";
import { useState } from "react";
import { Button } from "./Button";
import { CircleButton } from "./CircleButton";
import { RatingBar } from "./RatingBar";

interface Props {
  setRating: (value: number | undefined) => void;
}
export const RatingForm: NextPage<Props> = ({ setRating }) => {
  const [selected, setSelected] = useState<number | undefined>();
  return (
    <>
      <CircleButton>
        <img
          src="/images/icon-star.svg"
          alt="Rating"
          className="h-3.5 w-3.5 md:h-4 md:w-4"
        />
      </CircleButton>
      <h1 className="mt-4 text-md font-bold text-white md:mt-7.5 md:text-lg">
        How did we do?
      </h1>
      <p className="mt-2.5 text-[14px] leading-[22px] text-brand-gray-200 md:mt-[15px] md:mt-1.5 md:text-base md:leading-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingBar
        className="mt-6"
        selected={selected}
        setSelected={setSelected}
      />
      <Button className="mt-6 md:mt-8" onClick={() => setRating(selected)}>
        Submit
      </Button>
    </>
  );
};
