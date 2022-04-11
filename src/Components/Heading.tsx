import React, { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  checked: boolean;
}

export const Heading = ({ children, ...props }: Props) => {
  return <h1 style={{ color: props.checked ? "red" : "blue" }}>{children}</h1>;
};
