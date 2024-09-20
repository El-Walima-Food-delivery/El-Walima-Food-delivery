import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../redux/features/authSlice";
import { RootState, AppDispatch } from "../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
import "../../styles/index.css";
import "../../styles/tailwind.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.users);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      const user = unwrapResult(resultAction);
      console.log(
        user.token,
        "==================================================="
      );
      localStorage.setItem("token", user.token);
      if (user.role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <Brand />
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-6">
            <TextField
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button text="Sign In" />
          {status === "failed" && (
            <p className="text-red-500 text-center mt-2">{error}</p>
          )}
          <Link to="/signup">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Need an account?
            </p>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
