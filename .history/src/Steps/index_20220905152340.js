import Step from "./Step";
import PageFlex from "../App";
import React, { useState } from "react";

function App() {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentSteps, setCurrentSteps] = useState(1);
  function updateStep(step) {
    setCurrentSteps(step);
  }
  return (
    <div className="App-Project">
      <Step
        labelArray={labelArray}
        currentSteps={currentSteps}
        updateStep={updateStep}
      ></Step>
      <p className="flex-container">
        {" "}
        <PageFlex />
      </p>
    </div>
  );
}

export default App;
