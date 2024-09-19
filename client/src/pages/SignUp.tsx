import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";

interface UserInput {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface InputField {
  id: number;
  type: string;
  placeholder: string;
  value: string;
  name: keyof UserInput;
}

const SignUp: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error, setError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(
        signUpUser({
          ...userInput,
          location: { type: "Point", coordinates: [10.16579, 36.80611] },
        })
      );
      navigate("/signin");
    } catch (error) {
      console.log("Error signing up:", error);
      setError("Sign up failed");
    }
  };

  const Inputs: InputField[] = [
    {
      id: 1,
      type: "text",
      placeholder: "Name",
      value: userInput.name,
      name: "name",
    },
    {
      id: 2,
      type: "email",
      placeholder: "Email",
      value: userInput.email,
      name: "email",
    },
    {
      id: 3,
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
            <select
              value={userInput.role}
              name="role"
              onChange={handleChange}
              className="p-2 border rounded-md"
            >
              <option value="customer">Customer</option>
              <option value="restaurant_owner">Restaurant Owner</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <Button text="Sign Up" />
          <Link to="/signin">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Already have an account?
            </p>
          </Link>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </main>
  );
};

export default SignUp;
