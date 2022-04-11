import React, { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  checked: boolean;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button style={{ color: props.checked ? "red" : "blue" }} {...props}>
      {children}
    </button>
  );
};
