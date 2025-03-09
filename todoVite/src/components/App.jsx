import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GrMicrofocus } from "react-icons/gr";
import { Profile, Modal, Todo } from "./index";
import { useFirebase } from "../context/FirebaseContext";
import todoImage from "../assets/todoImage.png";
import { motion } from "framer-motion";

function App() {
  const { todos } = useFirebase();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [profile, setProfile] = useState(false);
  const [modal, setModal] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleProfile = () => setProfile(!profile);

  const onClose = () => {
    console.log("Close clicked");
    setModal(!modal);
  };

  const date = new Date();

  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div
      className={`relative bg-background scroll-smooth min-h-screen w-screen lg:w-[800px]  flex flex-col gap-2 justify-start items-center py-[10px] px-[20px] transition-colors ease-in-out duration-300`}
    >
      {focus ? (
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setFocus(false)}
            className={`${
              focus ? "flex" : "hidden"
            } w-fit bg-purple-600 text-white px-4 py-1 rounded-4`}
          >
            back
          </button>
        </div>
      ) : (
        <>
          <div
            className=" 
            w-full md:mt-4 flex justify-between items-center"
          >
            <Profile status={profile} toggleProfile={toggleProfile} />
            <div className="flex flex-row items-center gap-2">
              <GrMicrofocus className="text-primaryText text-2xl md:text-4xl font-semibold" />
              <p className="hidden md:flex text-lg   text-secondaryText font-medium">
                Focus Only On Today
              </p>
            </div>
            <button
              onClick={toggleProfile}
              className=" p-2 rounded-full bg-foreground active:bg-gray-200"
            >
              <IoPersonOutline className="text-primaryText text-base md:text-2xl" />
            </button>
          </div>

          <div
            className="mt-2 md:mt-4  
           bg-foreground w-full  h-36 md:h-52 p-3 md:p-6 flex flex-row justify-between items-end  rounded-md"
          >
            <div>
              <h4 className="text-sm md:text-base font-medium text-secondaryText">
                {formattedDate}
              </h4>
              <h1 className="text-3xl md:text-4xl font-semibold  text-primaryText">
                {day}
              </h1>
            </div>
            <button
              onClick={() => setFocus(!focus)}
              className="bg-primaryButton text-white text-sm md:text-lg px-4 py-1 rounded-4"
            >
              focus
            </button>
          </div>
          <button
            onClick={() => setModal(!modal)}
            className="fixed  lg:static lg:w-fit text-2xl p-4   bottom-10 right-5 bg-primaryButton text-white  rounded-8"
          >
            <MdAdd />
          </button>
        </>
      )}

      <div className="w-full h-full max-w-[600px] bg-foreground flex flex-col p-4 gap-4 rounded-8">
        {todos.length === 0 ? (
          <img src={todoImage} alt="" className="h-fit" />
        ) : (
          todos.map((task) => <Todo key={task.id} task={task} />)
        )}
      </div>

      <Modal isOpen={modal} Close={onClose} />
    </div>
  );
}

export default App;
