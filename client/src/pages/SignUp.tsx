import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../redux/features/authSlice';
import {AppDispatch} from '../redux/store'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState<string | null>(null);
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Dispatch the sign-up action
       await dispatch(signUpUser( {email, password, role} ));
       navigate('/signin');
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Sign up failed',);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#e6f2f5' }}>
        <img
          src="https://www.evanik.com/wp-content/uploads/2021/10/New-Project-10.png"
          alt="Shopping concept"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Create an account</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="user">Customer</option>
            <option value="seller">Seller</option>
          </select>
          <button type="submit" style={buttonStyle}>Create Account</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <a href="/signin" style={{ color: '#000', textDecoration: 'none' }}>Log in</a>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.5rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
};

export default SignUp;