import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components'
import Home from './screens'
import AboutUs from './screens/Body/AboutUs'
import Services from './screens/Body/Services'
import Staff from './screens/Body/Staff'
import Testimonials from './screens/Body/Testimonials'
import Contact from './screens/Body/Contact'
import ProgramsNav from './components/ProgramsNav'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="screens--wraper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Staff />} />
          <Route path="programs" element={<ProgramsNav />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
