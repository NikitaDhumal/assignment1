import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login({ setToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token?usr=${formData.email}&pwd=${formData.password}`
      )
      .then((response) => {
        if (response.data.message.msg === "success") {
          setToken(response.data.message.data.access_token);
          navigate("/listing");
        } else {
          alert("Incorrect User or Password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginwrapper">
      <div className="logincontainer">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputfield">
            <label>Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputfield">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
