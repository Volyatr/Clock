import React from "react";
import "./second.css";

const SecondArrow = ({ second }: { second: number }) => {
  return (
    <div className="second">
      <div
        style={{ transform: `rotateZ(${second * 6}deg)` }}
        className="seconds"
      ></div>
    </div>
  );
};

export default SecondArrow;
