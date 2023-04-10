import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { services } from '../../../content/services'

const serviceCard = services.map((service, idx) => (
  <Card
    key={idx}
    className="service--container"
    sx={{
      maxWidth: 300,
      display: 'flex',
      border: 0,
      color: 'black',
    }}>
    <CardActionArea className="card--container">
      {service.icon}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.service}
        </Typography>
        <Typography variant="body2">{service.description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
))

export default function OutlinedCard() {
  return (
    <Box
      className="serviceCard--container"
      sx={{ minWidth: 275, width: 'auto', height: 400 }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '60px',
          marginBottom: '0',
          fontFamily: 'Helvetica Neue LT',
        }}>
        SERVICES
      </h1>
      <Card className="service--card" sx={{ border: 0 }}>
        {serviceCard}
      </Card>
    </Box>
  )
}
