// components/SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm/SignupForm.css'

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here

    // For demonstration purposes, you can just log the form data
    console.log({
      name,
      username,
      email,
      password,
      isChecked,
    });
    navigate('/');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="label">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      </label>
      
      <label className="label">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      </label>
      
      <label className="label">
        EmailId:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      </label>
      
      <label className="label">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      </label>
      
      <label className="lable checkbox-label">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        I am not a robot
      </label>
      <br />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
