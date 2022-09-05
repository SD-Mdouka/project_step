import Step from "./Step";
import React, { useState } from "react";

function App() {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentSteps, setCurrentSteps] = useState(1);
  return (
    <div className="App">
      <Step labelArray={labelArray} currentSteps={currentSteps}></Step>
      <p>{currentSteps}</p>
    </div>
  );
}

export default App;
