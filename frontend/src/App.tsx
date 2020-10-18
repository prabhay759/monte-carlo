import React from "react";
import "./App.css";
import { Pi } from "./component/pi";

function App() {
  return (
    <div>
      <span style={{ textAlign: "center" }}>
        <h1>Monte Carlo PI calculation </h1>
      </span>
      <Pi />
    </div>
  );
}

export default App;
