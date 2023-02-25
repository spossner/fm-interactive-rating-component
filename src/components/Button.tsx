import { type NextPage } from "next";
import { type ComponentPropsWithoutRef } from "react";

export const Button: NextPage<ComponentPropsWithoutRef<"button">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`w-full rounded-full bg-brand p-3 font-bold uppercase tracking-[2px] text-white hover:bg-white hover:text-brand  ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
