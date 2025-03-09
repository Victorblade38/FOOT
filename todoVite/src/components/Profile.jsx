import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";
const Profile = ({ status, toggleProfile }) => {
  const { logout } = useAuth();

  return (
    <>
      {true && (
        <div
          className={`lg:w-fit ${
            status ? "right-0 " : "hidden"
          }  bottom-0 lg:top-16  bg-foreground flex flex-col gap-4 absolute h-screen lg:h-fit p-10 transition-all ease-linear duration-300 lg:rounded-8 shadow-md`}
        >
          <div className=" w-full flex justify-end">
            <button
              onClick={toggleProfile}
              className="flex text-primaryText active:bg-background p-1 rounded-full"
            >
              x
            </button>
          </div>
          <h1 className="text-primaryText">Profile</h1>
          <div className="">
            <p className="text-primaryText flex gap-4 items-center">
              Set theme <ThemeToggle />
            </p>
          </div>
          <button
            onClick={logout}
            className="w-full mt-6 p-1 text-sm border-1 border-gray-400 text-gray-800 text-primaryText rounded-4 "
          >
            logout
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
