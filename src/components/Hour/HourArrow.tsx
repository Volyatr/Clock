import React, { useState } from "react";
import "./hourArrow.css";

const HourArrow = ({ hours, minutes }: { hours: number; minutes: number }) => {
  return (
    <div className="hour">
      <div
        style={{ transform: `rotateZ(${hours * 30 + minutes / 12}deg)` }}
        className="hours"
      ></div>
    </div>
  );
};

export default HourArrow;
