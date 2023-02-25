import { type NextPage } from "next";
import { type ComponentPropsWithoutRef } from "react";

export const Circle: NextPage<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue md:h-12 md:w-12 ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};
