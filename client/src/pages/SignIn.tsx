import React, { useState, ChangeEvent, FormEvent } from "react";
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

interface UserInput {
  email: string;
  password: string;
}

interface InputField {
  id: number;
  type: string;
  placeholder: string;
  value: string;
  name: keyof UserInput;
}

const SignIn: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    email: "",
    password: "",
  });
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.users);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser(userInput));
      const user = unwrapResult(resultAction);
      localStorage.setItem("token", user.token);
      if (user.role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const Inputs: InputField[] = [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      value: userInput.email,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: userInput.password,
      name: "password",
    },
  ];

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <Brand />
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-6">
            {Inputs.map((input) => (
              <TextField
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={handleChange}
              />
            ))}
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
