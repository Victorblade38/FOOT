import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  const [todo, setTodo] = useState([]);

  const bgColor = {
    blue: "blue",
    orange: "orange",
    green: "green",
    purple: "purple",
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-700 col-span-2 row-span-2">
      <div className="bg-white p-4 flex flex-col">
        <div
          className={`col-span-2 row-span-2 bg-${color}-100 px-20 py-10 rounded-md flex flex-col gap-4 transition ease-in duration-300`}
        >
          <div className="flex flex-row justify-between p-2 gap-2">
            <span
              className={`bg-blue-100 px-3 py-2 rounded-md ${
                color === "blue" ? "shadow-none" : "shadow-md"
              } font-semibold
            transition ease-in duration-300 cursor-pointer`}
              onClick={() => setColor("blue")}
            >
              blue
            </span>
            <span
              className={`bg-orange-100 px-3 py-2 rounded-md ${
                color === "orange" ? "shadow-none" : "shadow-md"
              } font-semibold transition ease-in duration-300 cursor-pointer`}
              onClick={() => setColor("orange")}
            >
              orange
            </span>
            <span
              className={`bg-green-100 px-3 py-2 rounded-md ${
                color === "green" ? "shadow-none" : "shadow-md"
              } font-semibold transition ease-in duration-300 cursor-pointer`}
              onClick={() => setColor("green")}
            >
              green
            </span>
            <span
              className={`bg-red-100 px-3 py-2 rounded-md ${
                color === "red" ? "shadow-none" : "shadow-md"
              } font-semibold transition ease-in duration-300 cursor-pointer`}
              onClick={() => setColor("red")}
            >
              red
            </span>
          </div>
          <div className="flex flex-row ">
            <input
              type="text"
              className="col-span-2 px-8 py-3 rounded-s-md shadow-md focus:border-none focus:outline-none"
              placeholder="enter your todo"
            />
            <button className="bg-red-500 px-4 text-white font-semibold rounded-e-md shadow-md">
              submit
            </button>
          </div>
          <ul className="flex flex-col items-center gap-2">
            <li className="flex flex-row justify-between bg-gray-50 p-4 gap-2 w-full shadow-md rounded-md">
              <p className="font-serif text-sm">Your to do goes here</p>
              <input type="checkbox" />
            </li>
            <li className="flex flex-row justify-between bg-gray-50 p-4 gap-2 w-full shadow-md rounded-md">
              <p className="font-serif text-sm">Your to do goes here</p>
              <input type="checkbox" />
            </li>
            <li className="flex flex-row justify-between bg-gray-50 p-4 gap-2 w-full shadow-md rounded-md">
              <p className="font-serif text-sm">Your to do goes here</p>
              <input type="checkbox" />
            </li>
            <li className="flex flex-row justify-between bg-gray-50 p-4 gap-2 w-full shadow-md rounded-md">
              <p className="font-serif text-sm">Your to do goes here</p>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
