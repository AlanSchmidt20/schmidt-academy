import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { testimonials } from '../../../content/testimonials'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const testimonialCard = testimonials.map((testimonial, idx) => (
  <Card
    key={idx}
    className="testimonials--component"
    sx={{ maxWidth: 300, textAlign: 'center', height: '300px' }}>
    <CardMedia
      className="testimonials--image"
      component="img"
      src={`${testimonial.img}`}
    />
    <CardContent className="testimonials--content">
      <Typography
        variant="body2"
        color="text.secondary"
        fontFamily="Helvetica Neue LT"
        className="testimonial--description">
        {testimonial.description}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontFamily="Helvetica Neue LT"
        sx={{ marginBottom: 0, color: '#007bff' }}>
        {testimonial.name}
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        fontFamily="Helvetica Neue LT"
        sx={{ fontSize: 'small', fontWeight: 'bold' }}>
        {testimonial.title}
      </Typography>
    </CardContent>
  </Card>
))

export default function StaffCard() {
  return (
    <Box className="testimonialsCard--container">
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Helvetica Neue LT',
          fontSize: '50px',
        }}>
        TESTIMONIALS
      </h1>
      <Card
        className="testimonialsCard--component"
        variant="outlined"
        sx={{ display: 'flex', justifyContent: 'center', border: 0, height: 350 }}>
        {testimonialCard}
      </Card>
      <Link className="defaultButton--btn" to={'/testimonials'}>
        <Button
          className="programCard--button testimonials-btn"
          variant="contained"
          sx={{ textDecoration: 'none !important' }}
          size="large"
          color="info">
          MORE TESTIMONIALS
        </Button>
      </Link>
    </Box>
  )
}
