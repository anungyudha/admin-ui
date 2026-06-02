import React from "react";

function Button(props) {
  const { children, type = "submit", variant = "primary", onClick } = props;
  const baseClass = "h-12 rounded-md text-sm w-full transition-all hover:opacity-90";
  const variantClasses = {
    primary: "bg-primary text-white font-bold",
    secondary: "bg-gray-05 text-gray-02 font-medium",
  };
  const finalClasses = `${baseClass} ${
    variantClasses[variant] || variantClasses.primary
  }`;

  return (
    <button className={finalClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;