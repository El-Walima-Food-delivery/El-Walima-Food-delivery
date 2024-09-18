import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/features/authSlice';
import { RootState,AppDispatch } from '../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.users);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      const user = unwrapResult(resultAction);
      localStorage.setItem('token', user.token);
      if (user.role === 'seller') {
        navigate('/seller/dashboard');
      }
      //  else if (user.role === 'admin'){
      //   navigate('/admin');
      // }
       else {
        navigate('/');
      }
    } catch (error){
      console.log('Error signing in:', error);
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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sign In</h1>
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
          <button type="submit" style={buttonStyle}>Sign In</button>
        </form>
        {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don't have an account? <a href="/signup" style={{ color: '#000', textDecoration: 'none' }}>Create account</a>
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

export default SignIn;
