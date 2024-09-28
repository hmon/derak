import React from 'react';
import { cx } from "class-variance-authority";

import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl" | number;
}

const sizeMap = {
  sm: 8,
  md: 12,
  lg: 14,
  xl: 16,
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, style: styleProp, size, ...props }, ref) => {
    const style = {
      fontSize: typeof size === "number" ? size : sizeMap[size || "md"],
      ...styleProp
    };

    return (
      <button ref={ref} className={cx(styles.button, className)} style={style} {...props}>
        {children}
      </button>
    );
  }
);
