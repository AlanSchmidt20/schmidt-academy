import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {NavBar}  from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='about' element={<div> ABOUT US</div>}    />
            {/* <div className="App">
              <NavBar/>
            </div> */}
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
