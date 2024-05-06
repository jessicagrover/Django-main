import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Answer from "./Answer";
import App from "./App";
import Login from "./Login";
import Question from "./Question";
import Registration from "./Registration";
import { useNavigate } from 'react-router-dom';
//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import TopNav from './TopNav'
import Myscore from "./Myscore";



//import Home from "./Home"; // Assuming you have a Home component for the default route

export default function AppRouter() {
  return (
          <>
          <TopNav/>
          <Router>
          {/* <nav>
              <ul>
                  <li>
                      <Link to="/">Registration</Link>
                  </li>
                  <li>
                      <Link to="/Login">Login</Link>
                  </li>
                  <li>
                      <Link to="/Question">Question</Link>
                  </li>
                  <li>
                      <Link to="/Answer">Answer</Link>
                  </li>
                  <li>
                      <Link to="/Myscore">Score</Link>
                  </li>
              </ul>
          </nav> */}

          <Routes>
              <Route path="/" element={<Registration />} />
              <Route index element={<Registration />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Question" element={<Question />} />
              <Route path="/Myscore" element={<Myscore />} />
          </Routes>
      </Router>
      </>
  );
}
function QuestionAndAnswerPage() {
          // You can add authentication logic here to redirect to login if not logged in
          const isLoggedIn = true; // Assuming the user is logged in for now
        
          // If user is not logged in, redirect to login page
          if (!isLoggedIn) {
            return <Navigate to="/Login" />;
          }
        
          // If user is logged in, render question and answer page
          return (
            <>
              <Question />
              <Myscore/>
            </>
          );
        }
