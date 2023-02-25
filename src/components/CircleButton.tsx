import { type NextPage } from "next";
import { type ComponentPropsWithoutRef } from "react";

export const CircleButton: NextPage<ComponentPropsWithoutRef<"button">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue md:h-12 md:w-12 ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
