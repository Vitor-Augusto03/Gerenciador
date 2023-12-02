import React from "react";

const Button = ({ Type, text, onClick }) => {
  return (
    <button className="button-login" type={Type} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
