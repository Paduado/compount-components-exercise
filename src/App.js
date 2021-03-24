import React, { useState } from "react";
import "./styles.css";
import DropDown from "./DropDown";

export default function App() {
  const [country, setCountry] = useState("Mexico");
  return (
    <div className="App">
      <DropDown
        value={country}
        onChange={setCountry}
        options={["Mexico", "USA", "Vietnam", "Spain"]}
      />
    </div>
  );
}
