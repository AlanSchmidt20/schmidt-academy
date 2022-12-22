import React from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components'
import Home from './screens'
import AboutUs from './screens/Body/AboutUs'
import Services from './screens/Body/Services'
import Staff from './screens/Body/Staff'
import Programs from './screens/Body/Programs'
import Testimonials from './screens/Body/Testimonials'
import Contact from './screens/Body/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Staff />} />
        <Route path="programs" element={<Programs />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
