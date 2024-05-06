import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // State variable for login error
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setLoginError(false); // Reset login error state when username changes
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setLoginError(false); // Reset login error state when password changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae");
    
    const raw = JSON.stringify({
      "username": username,
      "password": password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://127.0.0.1:8000/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate('/Question'); // If login successful, navigate to question page
        } else {
          setLoginError(true); // If login fails, set loginError state to true
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginError(true); // Set loginError state to true for any errors
      });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '-50px' }}>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>Login</h2>
          {loginError && <p style={{ color: 'red' }}>Invalid username or password. Please try again.</p>}
        </div>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>Login</button>
        </form>
      </div>
    </div>
  );
}
