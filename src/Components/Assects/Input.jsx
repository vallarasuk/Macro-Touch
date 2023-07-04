import React from "react";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;
