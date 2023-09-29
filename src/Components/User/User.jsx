import React from "react";
import './User.css';

const User = ({ userData }) => {
  return (
    <div className="userwrapper">
      <div className="user">
        <div className="data">Name: {userData.name1}</div>
        <div className="data">Age: {userData.age}</div>
        <div className="data">Gender: {userData.gender}</div>
        <div className="data">Designation: {userData.designation}</div>
        <div className="data">Address: {userData.address}</div>
        <div className="data">Company Name: {userData.company_name}</div>
      </div>
    </div>
  );
};

export default User;
