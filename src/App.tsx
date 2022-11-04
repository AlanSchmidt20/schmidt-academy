import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Header  from './components';
import Home from "./screens";
import AboutUs from './screens/Body/AboutUs';


function App() {
  return (
    <BrowserRouter>
    <Header /> 
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path='about' element={<AboutUs />}  />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
