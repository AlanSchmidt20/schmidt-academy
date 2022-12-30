import React, { useState, useRef } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { NavBarTitles } from './constant'

import { Link } from 'react-router-dom'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const NavBar = () => {
  const [value, setValue] = useState(0)

  const navRef = useRef<HTMLBodyElement>(null)

  const showNavBar = () => {
    navRef.current?.classList.toggle('responsive--nav')
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="navBar" sx={{ width: '100%' }}>
      <nav ref={navRef}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="navbar--tabs">
          {NavBarTitles.map((routingNames, index) => (
            <Tab
              label={routingNames.title}
              to={routingNames.path}
              component={Link}
              className="tab--item"
              {...a11yProps(index)}
            />
          ))}

          {/* <Tabs>
      {[1, 2].map((title) => (
        <Tab label={title} value="/inbox/:id" to="/inbox/1" component={Link} />
      ))}
      )
    </Tabs> */}
        </Tabs>
        <CloseIcon className="nav-btn nav-close-btn" fontSize="medium" onClick={showNavBar} />
      </nav>
      <MenuIcon className="nav-btn" fontSize="large" onClick={showNavBar} />
    </Box>
  )
}

export default NavBar
