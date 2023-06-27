import React from "react";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
