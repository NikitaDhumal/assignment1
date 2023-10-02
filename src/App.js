import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Listing from './Components/Listing/Listing';
import User from './Components/User/User';
import './App.css';



function App() {
const [userData, setUserData] = useState("");
const [token, setToken] = useState("");
console.log(userData);
  return (
    
      <div className='mainContainer'>
        <Routes>
          <Route path="/user" element={<User userData={userData} token={token}/>} />
          <Route index path="/" element={<Login setToken={setToken}/>} />
          <Route path="/listing" element={<Listing setUserData={setUserData} token={token}/>} />
        </Routes>
      </div>
    
    
  );
}

export default App;
