import React, { useState, useRef } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu'

import { NavBarTitles } from './constant'

import { Link, useLocation } from 'react-router-dom'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const NavBar = () => {
  const [value, setValue] = useState(0)
  const location = useLocation()

  const navRef = useRef<HTMLBodyElement>(null)

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive--nav')
  }

  // Find the index of the current route in the NavBarTitles array
  const currentIndex = NavBarTitles.findIndex(item => location.pathname === item.path)

  // Update the value state variable to reflect the current index
  if (currentIndex !== -1 && currentIndex !== value) {
    setValue(currentIndex)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="navBar" sx={{ width: '100%' }}>
      <nav ref={navRef}>
        <Tabs value={value} onChange={handleChange} className="navbar--tabs">
          {NavBarTitles.map((routingNames, index) => (
            <Tab
              key={index}
              label={routingNames.title}
              onClick={showNavBar}
              to={routingNames.path}
              component={Link}
              className="tab--item"
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </nav>
      <MenuIcon className="nav-btn" fontSize="large" onClick={showNavBar} />
    </Box>
  )
}

export default NavBar
