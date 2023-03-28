import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './screens'
import AboutUs from './screens/Body/AboutUs'
import Services from './screens/Body/Services'
import Staff from './screens/Body/Staff'
import Contact from './screens/Body/Contact'
import ProgramsNav from './components/ProgramsNav'
import TestimonialsScreen from './screens/Body/TestimonialsScreen/TestimonialsScreen'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="screens--wraper">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Staff />} />
          <Route path="programs" element={<ProgramsNav />} />
          <Route path="testimonials" element={<TestimonialsScreen />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
