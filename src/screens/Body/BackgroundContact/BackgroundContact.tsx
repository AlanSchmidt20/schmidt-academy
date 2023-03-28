import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BackgroundImage = ({
  value,
  handleChange,
}: {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}) => {
  const handleClick = (event: React.SyntheticEvent) => {
    // Call handleChange here with the new value that you want to set
    handleChange(event, 1)
  }

  return (
    <div className="backgroundImage--component">
      <p style={{ fontFamily: 'Helvetica Neue LT' }}>
        Create your own program, adjust it at your convinience
      </p>
      <Link className="defaultButton--btn" to={'/contact'} onChange={handleClick}>
        <Button
          className="programCard--button contact-btn"
          variant="contained"
          sx={{ textDecoration: 'none !important' }}
          size="large"
          color="info">
          CONTACT US
        </Button>
      </Link>
    </div>
  )
}

export default BackgroundImage
