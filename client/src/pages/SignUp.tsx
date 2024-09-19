import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(signUpUser({
        name,
        email,
        password,
        role,
        location: { type: 'Point', coordinates: [10.16579, 36.80611] }
      }));
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Sign up failed');
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
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <select
              value={role}
              name="role"
              onChange={(e) => setRole(e.target.value)}
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