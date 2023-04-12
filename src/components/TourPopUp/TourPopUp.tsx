import { useState } from 'react'
import { Dialog } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import './index.css'

const TourPopUp = () => {
  const [showModal, setShowModal] = useState(true)

  const videoTour = require('../../images/videoTour.mp4')

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <Dialog open={showModal}>
      <div className="tourPopUp-container">
        <div className="tourPopUp-close">
          <CloseIcon onClick={handleClose} />
        </div>
        <video
          src={videoTour}
          autoPlay
          controls
          loop
          controlsList="nodownload nofullscreen noremoteplayback"
        />
        <Link
          style={{ textDecoration: 'none', margin: ' 0 auto', marginTop: '5px' }}
          to={'/programs'}
          onClick={() => {
            window.scroll(0, 0)
            setShowModal(false)
          }}>
          <Button
            className="programCard--button tourPopUp-button"
            variant="contained"
            size="large"
            color="warning">
            MORE INFO
          </Button>
        </Link>
      </div>
    </Dialog>
  )
}

export default TourPopUp
