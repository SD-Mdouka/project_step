import React, { useState } from "react";
import NavStep from "./NavStep";

export const index = (props) => {
  return (
    <div>
      {props.labelArray.map((item, index) => (
        <NavStep label={item}></NavStep>
      ))}
    </div>
  );
};
