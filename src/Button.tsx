import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** These are available variants */
  variant: 'primary' | 'secondary';
  checked: boolean;
}

/** This is a special button */
export const Button = ({ children, ...props }: Props) => {
  return (
    <button style={{ color: props.checked ? 'red' : 'blue' }} {...props}>
      {children}
    </button>
  );
};
