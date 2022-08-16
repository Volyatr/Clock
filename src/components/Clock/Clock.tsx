import React, { useState, useEffect } from "react";
import "./clock.css";
import HourArrow from "../Hour/HourArrow";
import Loader from "../Loader/Loader";
import MinuteArrow from "../Minute/MinuteArrow";
import SecondArrow from "../Second/SecondArrow";

const Clock = () => {
  const [time, setTime] = useState<Date>();
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://worldtimeapi.org/api/timezone/Asia/Tomsk")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTime(new Date(data.datetime));
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      {time ? (
        <div className="clock">
          <HourArrow
            hours={time?.getHours() || 0}
            minutes={time?.getMinutes() || 0}
          />
          <MinuteArrow minutes={time?.getMinutes() || 0} />
          <SecondArrow second={time?.getSeconds() || 0} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Clock;
