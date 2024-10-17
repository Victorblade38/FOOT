import React, { useState, useEffect } from "react";
import img from "../../assets/dustbin.png";

const Todo = ({ color = "blue" }) => {
  const [todo, setTodo] = useState(""); // New to-do input
  const maxTodos = 6; // Set the maximum number of to-dos allowed
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    console.log("Initial load from localStorage:", savedTodos); // Debugging log
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    console.log("Saving todos to localStorage:", todos); // Debugging log
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todos.length < maxTodos) {
      if (todo.trim()) {
        setTodos((prevTodos) => [
          ...prevTodos,
          { text: todo, isCompleted: false },
        ]);
        setTodo(""); // Clear the input field after adding
      }
    } else {
      alert(`You can only add up to ${maxTodos} to-dos.`);
    }
  };

  // Function to toggle the completion state of a to-do
  const toggleComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  // Function to delete a to-do
  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`col-span-2 row-span-2 bg-${color}-100 px-20 py-10 rounded-md flex flex-col gap-4 transition ease-in duration-300 font-serif`}
    >
      <div className="flex flex-col md:flex-row md:gap-0 gap-2">
        <input
          type="text"
          value={todo}
          className="col-span-2 w-full px-4 py-3 rounded-md md:rounded-s-md shadow-md focus:border-none focus:outline-none"
          placeholder="Enter your to-do"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 py-1 md:px-4 text-white md:font-semibold rounded-md md:rounded-e-md shadow-md"
          onClick={addTodo}
        >
          Submit
        </button>
      </div>

      <ul className="flex flex-col items-center gap-2">
        {todos.map((todoItem, index) => (
          <li
            key={index}
            className="flex flex-row justify-between bg-gray-50 p-3 md:p-4 gap-2 w-full shadow-md rounded-md"
          >
            <p
              className={`font-serif text:md md:text-md w-full ${
                todoItem.isCompleted ? "line-through text-slate-700" : ""
              }`}
            >
              {todoItem.text}
            </p>
            <div className="flex flex-row items-center gap-4">
              <input
                type="checkbox"
                checked={todoItem.isCompleted}
                onChange={() => toggleComplete(index)}
              />
              <button className="text-black" onClick={() => deleteTodo(index)}>
                <img src={img} alt="" width={30} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
