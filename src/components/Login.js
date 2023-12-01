import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      username,
      password
    });
    navigate('/');
  };

  return (
    
    <div className='page-container'>
      <h2>LogIn Page</h2>
     <form  className="login-form" onSubmit={handleSubmit}>
      <label className="label">
        Username:
       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      </label>
      <label className="label">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      </label>
      <br />
      <button type="submit" className="submit-button" >
        Submit
      </button>
    </form>
    </div>
  );
};

export default Login;
