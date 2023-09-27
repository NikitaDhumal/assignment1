import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate= useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log(formData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get(
          'https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token',
          formData
        );
  
        // Handle the response data as needed
        console.log('Response data:', response.data);
      } catch (error) {
        // Handle any errors here
        console.error('Error:', error);
      }
      navigate('/listing')
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
