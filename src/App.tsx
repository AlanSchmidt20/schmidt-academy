import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Header  from './components';


function App() {
  return (
    <BrowserRouter>
    <Header /> 
      <Routes>

          <Route path="/" element={<div className="home--element">HOME</div>} />
          <Route path='about' element={<div className="about--element">about</div>}  />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
