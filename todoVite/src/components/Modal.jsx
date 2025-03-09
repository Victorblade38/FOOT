import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useFirebase } from "../context/FirebaseContext";
import Suggestions from "./Suggestions";

const Modal = ({ isOpen, Close }) => {
  const [task, setTask] = useState({
    title: "",
    priority: 1,
  });

  const { addTodo } = useFirebase();

  const closeModal = () => Close();

  const add = (e) => {
    e.preventDefault();
    if (!task.title.trim()) {
      alert("Please provide the title ");
      return;
    }
    addTodo(task);
    setTask({ title: "", priority: 1 });
    Close();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return isOpen ? (
    <div
      className="fixed  inset-0 bg-background flex p-6 justify-center items-start lg:items-center z-50"
      role="dialog"
      aria-labelledby="add-task-title"
      aria-modal="true"
    >
      <div className="w-full max-w-96 flex flex-col gap-4 bg-foreground rounded-8  p-6 ">
        <div className="flex justify-end">
          <button
            type="button"
            className=" text-lg text-secondaryText p-2 rounded-lg"
            onClick={() => closeModal()}
          >
            <MdClose />
          </button>
        </div>
        <Suggestions />
        <form
          onSubmit={add}
          className="flex flex-col gap-4 lg:gap-8 font-medium text-secondaryText"
        >
          <label htmlFor="title" className="flex flex-col gap-3 lg:gap-4">
            Enter the title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Write a task"
              className="font-normal w-full bg-foreground  border-b border-border outline-none "
              onChange={handleChange}
              value={task.title}
            />
          </label>

          <button
            type="submit"
            className="text-sm px-4 py-2 lg:p-4 bg-primaryButton active:bg-purple-700 text-white rounded-4"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
