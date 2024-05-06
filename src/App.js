// import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav'
import DataTable from './DataComponent'; 
import Registration from './Registration';
import Myscore from './Myscore';
import Question from './Question';
import Answer from './Answer';
import AppRouter from './Router';
//import axios.create from './Http-commons';

import { useState } from 'react';

import axios from "axios";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );


const url="http://127.0.0.1:8006/calculate_score"
const config = {headers: {
  "Content-type": "application/json",
  //"Access-Control-Allow-Origin" : "*"
},
mode: 'cors' 
};
// axios.get("url":"http://127.0.0.1:8006/calculate_score",
//   mode:"cors", config
//   ).then((response)=>{console.log(response.data);})
axios.get(url, config)
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });

function App() {
  // const[var1, setvar]=useState('')
  //console.log('...',data)
  return (
    
    <div className="App">
      <TopNav/>
      <Registration/> 
      <AppRouter/>
      <Question/>
      <Answer/>
      <Myscore/> 

      <DataTable/>
    </div>
  );

}

export default App;
