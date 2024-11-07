import { useState } from "react";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Quote from "./components/quote/Quote";
import Todo from "./components/todos/Todo";

function App() {
  const [color, setColor] = useState("gray"); // Color state
  return (
    <div
      className={`h-screen w-screen overflow-none flex justify-center items-center bg-${color}-700 `}
    >
      <div className="gap-2 md:gap-4 overflow-none flex flex-col md:flex-row justify-center items-center  p-4 md:p-0">
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
          <Quote color={color} />
          <Stopwatch color={color} />
        </div>
        <div className="w-1/2 flex justify-center">
          <Todo color={color} />
        </div>
      </div>
    </div>
  );
}

export default App;
