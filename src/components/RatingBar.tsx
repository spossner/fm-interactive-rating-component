import { type NextPage } from "next";
import { type ComponentPropsWithoutRef } from "react";
import { CircleButton } from "./CircleButton";

interface Props extends ComponentPropsWithoutRef<"div"> {
  selected?: number;
  setSelected: (value: number) => void;
}
export const RatingBar: NextPage<Props> = ({
  className,
  selected,
  setSelected,
}) => {
  return (
    <div className={`flex w-full justify-between gap-4 ${className ?? ""}`}>
      {[...Array<unknown>(5)].map((_, index) => (
        <CircleButton
          key={index}
          onClick={() => setSelected(index)}
          className={`font-bold text-brand-gray hover:bg-brand hover:text-white md:text-[1rem] ${
            selected === index ? "bg-brand-gray text-white" : ""
          }`}
        >
          {index + 1}
        </CircleButton>
      ))}
    </div>
  );
};
