import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentSteps, setCurrentSteps] = useState(1);
  return <div className="App">{currentSteps}</div>;
}

export default App;
