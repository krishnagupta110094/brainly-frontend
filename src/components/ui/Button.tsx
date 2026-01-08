import type { ReactElement } from "react";

type Varients = "primary" | "secondary";

interface ButtonProps {
  varient: Varients;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e0e7fe] text-[#5046e4]",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-3 px-6",
};

const defaultStyles =
  "rounded-md cursor-pointer font-normal transition-opacity duration-200";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.varient]} ${defaultStyles} ${
        sizeStyles[props.size]
      } ${props.fullWidth ? "w-full" : ""} ${
        props.loading ? "opacity-60 cursor-not-allowed" : ""
      }`}
      disabled={props.loading}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-center ">
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}
      </div>
    </button>
  );
};
