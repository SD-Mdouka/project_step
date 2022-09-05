import React from "react";

const NavStep = (props) => {
  return (
    <div className={"stepeBlock" + (props.selected ? " selected" : "")}>
      <div
        className="circleWrapper"
        onClick={() => props.updateStep(props.index + 1)}
      >
        <div className="cirecle">{props.index + 1}</div>
      </div>
      <span>{props.label}</span>
    </div>
  );
};
export default NavStep;
