import React, { cloneElement, useState } from "react";
import "./styles.css";
import DropDown, { Select, Option } from "./DropDown";
import Label from "./Label";

export default function App() {
  const [country, setCountry] = useState("Mexico");
  return (
    <div className="App">
      <DropDown
        value={country}
        onChange={setCountry}
        options={["Mexico", "USA", "Vietnam", "Spain"]}
      />
      {/* <Select value={country} onChange={setCountry}>
        <Group name="America">
          <Option>Mexico</Option>
          <Option disabled>USA</Option>
        </Group>
        <Label>Asia</Label>
        <Option style={{ color: "green" }}>Vietnam</Option>
        <Label>Europe</Label>
        <Option>Spain</Option>
      </Select> */}
    </div>
  );
}

function Group({ name, children }) {
  return (
    <>
      <Label>{name}</Label>
      {children}
    </>
  );
}
