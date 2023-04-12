import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import Staff from './Staff'
import BackgroundContact from './BackgroundContact'
import Programs from './Programs'
import Testimonials from './Testimonials'
import Contact from './Contact'
import { useState } from 'react'
import Tour from '../../components/Tour/Tour'

const Screens = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className="body--container">
      <Home />
      <AboutUs />
      <Tour />
      <Services />
      <Staff />
      <BackgroundContact value={value} handleChange={handleChange} />
      <Programs />
      <Testimonials />  
      <Contact />
    </div>
  )
}

export default Screens
