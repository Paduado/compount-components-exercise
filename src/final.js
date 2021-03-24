import React, { useState, useRef, createContext, useContext } from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

export default function DropDown({ options, value, onChange }) {
  return (
    <Select value={value} onChange={onChange}>
      {options.map((option) => (
        <Option>{option}</Option>
      ))}
    </Select>
  );
}

const SelectContext = createContext();

export function Select({ children, value, onChange }) {
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
          <SelectContext.Provider
            value={{
              selectedValue: value,
              setSelectedValue: handleOptionClick
            }}
          >
            {children}
          </SelectContext.Provider>
        </ul>
      )}
    </div>
  );
}

export function Option({ children, disabled, ...props }) {
  const { selectedValue, setSelectedValue } = useContext(SelectContext);

  let className = "option";
  if (selectedValue === children) {
    className += " selected";
  }
  if (disabled) {
    className += " disabled";
  }
  return (
    <li
      {...props}
      className={className}
      onClick={() => setSelectedValue(children)}
    >
      {children}
    </li>
  );
}
