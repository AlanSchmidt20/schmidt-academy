import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { testimonials } from '../../../content/testimonials'

const testimonialCard = testimonials.map(testimonial => (
  <Card className="testimonials--component" sx={{ maxWidth: 300, textAlign: 'center' }}>
    <CardMedia className="testimonials--image" component="img" src={`${testimonial.img}`} />
    <CardContent className="testimonials--content">
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: '40px' }}>
        {testimonial.description}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ marginBottom: 0, color: '#007bff' }}>
        {testimonial.name}
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ fontSize: 'small', fontWeight: 'bold' }}>
        {testimonial.title}
      </Typography>
    </CardContent>
  </Card>
))

export default function StaffCard() {
  return (
    <Box className="testimonialsCard--container">
      <h1 style={{ textAlign: 'center' }}>TESTIMONIALS</h1>
      <Card
        className="testimonialsCard--component"
        variant="outlined"
        sx={{ display: 'flex', justifyContent: 'center', border: 0, height: 240 }}>
        {testimonialCard}
      </Card>
    </Box>
  )
}
