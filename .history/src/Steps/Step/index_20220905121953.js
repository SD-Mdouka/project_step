import React, { useState } from "react";
import NavStep from "./NavStep";

const Step = (props) => {
  return (
    <div className="stepsWrapp">
      {props.labelArray.map((item, index) => (
        <NavStep key={index} index={index} label={item}></NavStep>
      ))}
    </div>
  );
};
export default Step;
