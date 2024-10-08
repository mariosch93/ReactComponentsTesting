import "./button.css";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?:
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "secondary"
    | "dark";
}

const Button = ({ children, color = "primary", onClick, disabled }: Props) => {
  return (
    <button
      className={`button btn btn-${color}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
