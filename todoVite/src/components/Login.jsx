import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/Foot");
    } catch (err) {
      setError("Failed to create an account \n" + err.code);
      console.log(err.code);
      console.log(err.message);
    }
    setLoading(false);
  };

  return (
    <div className=" w-72 bg-foreground p-8 rounded-8">
      <h2 className="text-center mb-4 font-semibold text-lg">Log In</h2>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label className="flex flex-col gap-2 text-sm text-gray-500">
          email
          <input
            type="email"
            ref={emailRef}
            className="font-normal w-full bg-foreground  border-b border-border outline-none "
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-gray-500">
          password
          <input
            type="password"
            ref={passwordRef}
            className="font-normal w-full bg-foreground  border-b border-border outline-none "
            required
          />
        </label>

        <button
          disabled={loading}
          className="w-full p-2 bg-primaryButton active:bg-purple-800 text-white rounded-4"
          type="submit"
        >
          Login
        </button>
      </form>

      <div className="w-100 text-center mt-6 text-sm ">
        Need an account?{" "}
        <Link to="/signup" className="underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Login;
