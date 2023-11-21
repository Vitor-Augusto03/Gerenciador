import React from "react";

const Input = ({type, placeholder, value, onChange}) => {
    return <Input className="outline-none W-full  pt-4 pr-3 rounded text-base border-none bg-blue-900 " 
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
    />
}
export default Input;