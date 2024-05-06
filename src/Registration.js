import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import TopNav from './TopNav'
import { bgcolor } from '@mui/system';
import { useNavigate } from 'react-router-dom';

let m=1
export default function Registration() {
    // State variables to hold form data

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login');
    }
          
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("email", email)
        console.log("password", password)
        console.log("username", username)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
          m=m+1
        // Prepare the data to send to the backend
        const data = JSON.stringify({
          "username": username,
          "email": email,
          "password": password

        });
//         axios.post("http://127.0.0.1:8000/register",data).then(
//           (response)=>{console.log(response)}
          const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: data,
                    redirect: "follow"
          };
        
          fetch("http://127.0.0.1:8000/register", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

          goToLogin()
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label htmlFor="Sign up" className="form-label" style={{fontSize: '20px' ,bgcolor:'teal',color: 'black'}}>Sign up</label><br/>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="username"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}
