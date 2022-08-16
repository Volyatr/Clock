import React from "react";
import "./minuteArrow.css";

const MinuteArrow = ({ minutes }: { minutes: number }) => {
  return (
    <div className="minute">
      <div
        style={{ transform: `rotateZ(${minutes * 6}deg)` }}
        className="minutes"
      ></div>
    </div>
  );
};

export default MinuteArrow;
