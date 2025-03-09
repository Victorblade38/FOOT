import React from "react";

const ColorThemes = () => {
  return (
    <div className={`flex flex-col w-1/2 items-center gap-2 md:p-6`}>
      <div
        className={`flex flex-row justify-between p-4 gap-2 rounded-md font-sans`}
      >
        <span
          className={`bg-gray-700 w-8 h-8 rounded-full
            ${color !== "gray" ? "shadow-md " : "border-2 border-white"}
             transition ease-in duration-300 cursor-pointer `}
          onClick={() => setColor("gray")}
        ></span>
        <span
          className={`bg-orange-700 w-8 h-8 rounded-full 
            ${color !== "orange" ? "shadow-md " : "border-2 border-white"}
             transition ease-in duration-300 cursor-pointer`}
          onClick={() => setColor("orange")}
        ></span>
        <span
          className={`bg-red-700 w-8 h-8 rounded-full 
            ${color !== "red" ? "shadow-md " : "border-2 border-white"}
             transition ease-in duration-300 cursor-pointer`}
          onClick={() => setColor("red")}
        ></span>
        <span
          className={`bg-green-700 w-8 h-8 rounded-full 
            ${color !== "green" ? "shadow-md " : "border-2 border-white"}
             transition ease-in duration-300 cursor-pointer`}
          onClick={() => setColor("green")}
        ></span>
        <span
          className={`bg-purple-700 w-8 h-8 rounded-full 
            ${color !== "purple" ? "shadow-md " : "border-2 border-white"}
             transition ease-in duration-300 cursor-pointer`}
          onClick={() => setColor("purple")}
        ></span>
      </div>
    </div>
  );
};

export default ColorThemes;
