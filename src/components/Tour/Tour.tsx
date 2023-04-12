import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'

const Tour = () => {
  const videoTour = require('../../images/videoTour.mp4')

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
          controls
          autoPlay
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
            OUR PROGRAMS
          </Typography>
          At the Schmidt Tennis Academy we offer a variety of training programs that will
          allow you to quickly obtain significant results, and that will give you all the
          keys to achieve your goals. Joining the Schmidt Tennis Academy for a course
          means joining a family of enthusiasts led by a team of teachers using the
          Schmidt methodology has proven its efficiency for 25 years.
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
