import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { RiResetLeftFill } from "react-icons/ri";

const Stopwatch = ({ focus }) => {
  const [time, setTime] = useState(0); // Initial time is set to 0
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  console.log("Logging time", time);
  return (
    <div
      className={` ${
        focus ? "flex" : "hidden"
      }  flex-row w-fit gap-2 p-1 rounded-md  border-2 border-purple-400`}
    >
      <div className="flex flex-row gap-4 text-white">
        <p className=" text-xl px-2 text-center w-fit">{formatTime(time)}</p>

        <button
          className="flex bg-blue-500 text-white p-2 rounded-md shadow-sm"
          onClick={
            isActive ? () => setIsActive(false) : () => setIsActive(true)
          }
        >
          {isActive ? <FaPause /> : <FaPlay />}
        </button>
        {time !== 0 ? (
          <button
            className="bg-blue-500 text-white p-2 rounded-md shadow-sm"
            onClick={handleReset}
          >
            <RiResetLeftFill />
          </button>
        ) : (
          <button className="bg-blue-500 text-white p-2 rounded-md shadow-sm">
            <MdTimer />
          </button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
