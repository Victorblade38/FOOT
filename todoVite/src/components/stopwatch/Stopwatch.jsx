import React, { useEffect, useState } from "react";

const Stopwatch = ({ color = "blue" }) => {
  const [time, setTime] = useState(0); // Initial time is set to 0
  const [isActive, setIsActive] = useState(false);

  // This effect handles starting and stopping the timer
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms (0.01 seconds)
      }, 10); // Update every 10 milliseconds
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      ":" +
      String(milliseconds).padStart(2, "0")
    );
  };
  return (
    <div
      className={`flex flex-row justify-center gap-4 p-6 md:p-10 rounded-md  md:w-72 font-mono font-semibold`}
    >
      <div className="flex flex-col gap-4 text-white">
        <span className="col-span-3 row-span-1 text-3xl md:text-4xl text-center w-56">
          {formatTime(time)}
        </span>
        <div className="flex flex-row justify-around text-sm md:text-lg">
          {" "}
          <button
            className="col-span-1 row-span-1 bg-blue-500 text-white px-2 py-1 md:p-2 rounded-md shadow-md"
            onClick={handleStart}
          >
            start
          </button>
          <button
            className="col-span-1 row-span-1  bg-blue-500 text-white px-2 py-1 md:p-2  rounded-md shadow-md"
            onClick={handleStop}
          >
            stop
          </button>
          <button
            className="col-span-1 row-span-1 bg-blue-500 text-white px-2 py-1 md:p-2  rounded-md shadow-md"
            onClick={handleReset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
