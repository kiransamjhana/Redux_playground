import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "./Components/Button";
import { DisplayData } from "./Components/DisplayData";

function App() {
  return (
    <div className="App">
      <DisplayData />
      <Button />
    </div>
  );
}

export default App;
