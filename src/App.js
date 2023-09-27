import React, { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Listing from './Components/Listing';
import User from './Components/User';



function App() {
const [userData, setUserData] = useState("");
console.log(userData);
  return (
    
      <div>
        <Routes>
          <Route path="/user" element={<User userData={userData}/>} />
          <Route index path="/" element={<Login/>} />
          <Route path="/listing" element={<Listing setUserData={setUserData}/>} />
        </Routes>
      </div>
    
    //<Listing SetUserdata={setUserdata}/>
  );
}

export default App;
