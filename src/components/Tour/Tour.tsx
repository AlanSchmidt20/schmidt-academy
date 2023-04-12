import { useRef } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'

const Tour = () => {
  const videoTour = require('../../images/videoTour.mp4')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <Card
      className="ourPrograms--component"
      sx={{ boxShadow: 'none', margin: '50px 0' /* , height: 600 */ }}>
      <CardContent
        className="ourPrograms--content "
        sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <CardMedia
          component="video"
          className="ourPrograms--image"
          src={videoTour}
          loop
          autoPlay
          playsInline
          muted
          onClick={handleVideoClick}
          ref={videoRef}
          sx={{ width: '50%' }}
        />
        <div
          className="ourPrograms--text"
          style={{
            width: '30%',
            alignSelf: 'center',
            fontSize: 'large',
            lineHeight: '1.9',
            fontWeight: 500,
          }}>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="bold"
            fontFamily="Helvetica Neue LT">
            MIAMI TENNIS TOUR 2023
          </Typography>
          Experience Miami's sun, sand, sea, and tennis scene with our Miami Tennis Tour.
          Our program offers top coaching, friendly matches, and exciting social
          activities to elevate your game and create unforgettable memories.
          <Link
            style={{ textDecoration: 'none' }}
            to={'/programs'}
            onClick={() => {
              window.scroll(0, 0)
            }}>
            <CardActions
              className="ourPrograms--action"
              sx={{ padding: 0, marginTop: '20px' }}>
              <Button
                className="programCard--button"
                variant="contained"
                size="large"
                color="warning">
                MORE INFO
              </Button>
            </CardActions>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default Tour
