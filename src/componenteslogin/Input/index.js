import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input-login"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
