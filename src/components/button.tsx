import { ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "outlined";
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const button = tv({
    base: "flex items-center w-full justify-center rounded-md p-4 uppercase font-semibold",
    variants: {
      color: {
        primary: "bg-brand-yellow border-2 border-brand-yellow text-black",
        outlined:
          "bg-transparent border-2 border-brand-lightGrey text-blac border-opacity-50",
      },
    },

    defaultVariants: {
      size: "md",
      color: "primary",
    },
  });
  return (
    <button className={button({ color: variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
