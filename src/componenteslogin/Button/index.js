import React from "react";

const Button = ({ Type, text, onClick }) => {
  return (
    <Button ClassName="" type={Type} onClick={onClick}>
      {text}
    </Button>
  );
};
export default Button;
