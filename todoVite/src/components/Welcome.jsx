import React from "react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/Foot");
  return (
    <div className="flex flex-col justify-center items-center">
      <p>this is welcome screen</p>
      <button onClick={handleSubmit} className="p-2 bg-primaryButton">
        go to app
      </button>
    </div>
  );
};

export default Welcome;
