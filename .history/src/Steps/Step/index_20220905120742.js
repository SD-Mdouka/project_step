import React, { useState } from "react";
import NavStep from "./NavStep";

const Step = (props) => {
  return (
    <div>
      {props.labelArray.map((item, index) => (
        <NavStep label={item}></NavStep>
      ))}
    </div>
  );
};
export default Step;
