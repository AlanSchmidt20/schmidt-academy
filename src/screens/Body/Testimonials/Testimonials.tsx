import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { testimonials } from '../../../content/testimonials'

const testimonialCard = testimonials.map(testimonial => (
  <Card className="member--component" sx={{ maxWidth: 300, margin: '0 10', textAlign: 'center' }}>
    <CardMedia component="img" height="370" /* src={`${}`}  */ />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {testimonial.description}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 0 }}>
        {testimonial.name}
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ fontSize: 'small', marginTop: 0, fontWeight: 'bold' }}>
        {testimonial.title}
      </Typography>
    </CardContent>
  </Card>
))

export default function StaffCard() {
  return (
    <Box className="memberCard--container">
      <h1 style={{ textAlign: 'center' }}>TESTIMONIALS</h1>
      <Card
        className="memberCard--component"
        variant="outlined"
        sx={{ display: 'flex', justifyContent: 'center', border: 0 }}>
        {testimonialCard}
      </Card>
    </Box>
  )
}
