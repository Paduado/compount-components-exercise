import React, { useState, useRef } from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

export default function DropDown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  function handleOptionClick(option) {
    onChange(option);
    ref.current.blur();
  }

  return (
    <div
      ref={ref}
      tabIndex="1"
      className="dropdown-container"
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div className="dropdown">
        {value}
        <Arrow className={`arrow ${open ? "open" : ""}`} />
      </div>
      {open && (
        <ul className="options-container">
          {options.map((option) => (
            <Option
              key={option}
              onClick={handleOptionClick}
              selectedValue={value}
            >
              {option}
            </Option>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Option({
  children,
  selectedValue,
  onClick,
  disabled,
  ...props
}) {
  let className = "option";
  if (selectedValue === children) {
    className += " selected";
  }
  if (disabled) {
    className += " disabled";
  }
  return (
    <li {...props} className={className} onClick={() => onClick(children)}>
      {children}
    </li>
  );
}
