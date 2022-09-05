import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentSteps, setCurrentSteps] = useState(1);
  return (
    <div className="App">
      <p>Navigation</p>
      <p>{currentSteps}</p>
    </div>
  );
}

export default App;
