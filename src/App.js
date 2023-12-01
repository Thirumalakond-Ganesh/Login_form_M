import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const Home = () => (
  <div>
    <h2>Welcome to The Home Page</h2>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('login');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  setTimeout(() => {
    setIsSubmitting(false);
   
  }, );


  return (
    <>
    <BrowserRouter>
      <div className="app-container">
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup isSubmitting={isSubmitting}/>}/>
        <Route path="/login" element={<Login isSubmitting={isSubmitting} />}/>
        </Routes>
        <div className="bottom-buttons">
          <Link to="/login">
            <button className={activeTab === 'login' ? 'active' : ''}
                onClick={() => handleTabClick('login')}
                disabled={isSubmitting}>LogIn</button>
          </Link>
          <Link to="/signup">
            <button className={activeTab === 'signup' ? 'active' : ''}
                onClick={() => handleTabClick('signup')}
                disabled={isSubmitting}>SignUp</button>
          </Link>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;
