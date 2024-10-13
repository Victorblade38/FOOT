import { useState } from "react";
import Stopwatch from "./components/stopwatch/stopwatch";
import Quote from "./components/quote/Quote";
import Todo from "./components/todos/Todo";

function App() {
  const [color, setColor] = useState("gray"); // Color state
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-700  gap-4 p-4 md:p-0">
      <div className="flex flex-col items-center gap-4">
        <div
          className={`flex flex-row justify-between p-4 gap-2 bg-${color}-100 rounded-md font-sans`}
        >
          <span
            className={`bg-gray-100 px-3 py-2 rounded-md 
            ${color !== "gray" ? "shadow-md " : "border-2 border-slate-800"}
             transition ease-in duration-300 cursor-pointer`}
            onClick={() => setColor("gray")}
          >
            light
          </span>
          <span
            className={`bg-orange-100 px-3 py-2 rounded-md 
            ${color !== "orange" ? "shadow-md " : "border-2 border-slate-800"}
             transition ease-in duration-300 cursor-pointer`}
            onClick={() => setColor("orange")}
          >
            orange
          </span>
          <span
            className={`bg-red-100 px-3 py-2 rounded-md 
            ${color !== "red" ? "shadow-md " : "border-2 border-slate-800"}
             transition ease-in duration-300 cursor-pointer`}
            onClick={() => setColor("red")}
          >
            red
          </span>
          <span
            className={`bg-green-100 px-3 py-2 rounded-md 
            ${color !== "green" ? "shadow-md " : "border-2 border-slate-800"}
             transition ease-in duration-300 cursor-pointer`}
            onClick={() => setColor("green")}
          >
            green
          </span>
          <span
            className={`bg-blue-100 px-3 py-2 rounded-md 
            ${color !== "blue" ? "shadow-md " : "border-2 border-slate-800"}
             transition ease-in duration-300 cursor-pointer`}
            onClick={() => setColor("blue")}
          >
            blue
          </span>
        </div>
        <Quote color={color} />
        <Stopwatch color={color} />
      </div>
      <div className="col-span-1 row-span-2">
        <Todo color={color} />
      </div>
    </div>
  );
}

export default App;
