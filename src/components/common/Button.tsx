import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variantClasses = {
    primary: "bg-[#F6F7FA] text-[#676767]",
    secondary: "bg-[#FB394F] text-white",
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg font-medium text-sm py-2 px-[14px] cursor-pointer
      ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
