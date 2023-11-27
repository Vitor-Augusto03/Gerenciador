import React from "react";

const Button = ({ Type, text, onClick }) => {
  return (
    <button ClassName="" type={Type} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
