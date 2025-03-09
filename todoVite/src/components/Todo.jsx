import React from "react";
import { MdDelete, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useFirebase } from "../context/FirebaseContext";

const Todo = ({ task }) => {
  const { toggleCompleteTodo, removeTodo } = useFirebase();
  const toggleHandler = () => toggleCompleteTodo(task.id);

  const deleteTaskHandler = (id) => {
    removeTodo(id);
  };
  return (
    <div className="flex flex-row justify-between gap-4 w-full  rounded-md ">
      <p
        className={`font-medium line-clamp-3 text-secondaryText text-[14px] w-full ${
          task?.completed ? "line-through text-slate-700" : ""
        }`}
      >
        {task?.title}
      </p>
      <div className="flex flex-row task?s-center  gap-4 ">
        <button onClick={() => toggleHandler(task?.id)}>
          {task.completed ? (
            <MdCheckBox className="text-lg text-primaryText" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-lg text-secondaryText" />
          )}
        </button>
        {task.completed && (
          <button
            className={` text-black`}
            onClick={() => deleteTaskHandler(task.id)}
          >
            <MdDelete className="text-lg text-red-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
