import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUp, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/Foot");
    } catch (err) {
      setError("Failed to create an account \n" + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-72 bg-foreground p-8 rounded-8">
      <h2 className="text-center mb-4 font-semibold text-lg">Sign Up</h2>

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

        <label className="flex flex-col gap-2 text-sm text-gray-500">
          confirm password
          <input
            type="password"
            ref={passwordConfirmRef}
            className="font-normal w-full bg-foreground  border-b border-border outline-none "
            required
          />
        </label>

        <button
          disabled={loading}
          className="w-full p-2 text-sm bg-primaryButton active:bg-purple-800 text-white rounded-4"
          type="submit"
        >
          Create an account
        </button>
      </form>

      <div className="w-full text-center mt-6 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
      <button
        onClick={loginWithGoogle}
        className="w-full mt-6 p-1 text-sm border-1 border-gray-400 text-gray-800 rounded-4"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Signup;
