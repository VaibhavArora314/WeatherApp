import React from "react";

function Select({
  label,
  disabled,
  options,
  fieldForValue,
  selectedValue,
  setSelected,
}) {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      value={selectedValue}
      onChange={(e) => setSelected(e.currentTarget.value)}
      disabled={disabled}
    >
      <option value="">
        Select a {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option[fieldForValue]}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
