import React, { useState } from "react";
import './User.css';
import axios from "axios";

const User = ({ userData, token }) => {
  const [editUserData, setEditUserData]= useState(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({
      ...editUserData,
      [name]: value,
    });
  };
  const headers = {
    'Authorization': token, 
    'Content-Type': 'application/json', 
  };
  const handleSave = (e) => {
      e.preventDefault()
      axios
      .put(`https://assignment.8848digitalerp.com/api/resource/Assignment/${userData.name1}`,editUserData,
      {headers:headers})
      .then((response)=>{
        console.log(response)
        alert("User data is saved successfully.")
      })
      .catch((error) => {
        console.error('Error while adding data:', error);
      });
    }  
  
  return (
    <div className="userwrapper">
    <div className="user">
      <h2>Edit User Data</h2>
      <form onSubmit={handleSave}>
        <div className="inputfield">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name1"
            value={editUserData.name1}
            required
          />
        </div>
        <div className="inputfield">
          <label>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={editUserData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputfield">
          <label>Gender:</label>
          <select
            id="gender"
            name="gender"
            value={editUserData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        
        <div className="inputfield">
          <label>Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="company_name"
            value={editUserData.company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="button" type="submit">Save</button>
        </div>
      </form>
    </div>
    </div>
  );

};

export default User;
