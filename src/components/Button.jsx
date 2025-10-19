import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`px-6 py-3 rounded-lg font-semibold ${className}`}>
      {children}
    </button>
  );
};

export default Button;
