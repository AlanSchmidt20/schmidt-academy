import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { team } from '../../../content/team'

const memberCard = team.map(member => (
  <Card className="member--component" sx={{ maxWidth: 300, margin: '0 10', textAlign: 'center' }}>
    <CardMedia component="img" height="370" src={`${member.img}`} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: 0 }}>
        {member.name}
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ fontSize: 'small', marginTop: 0, fontWeight: 'bold' }}>
        {member.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {member.description}
      </Typography>
      {/*       <Typography variant="body2" color="text.secondary">
        {member.icon}
      </Typography> */}
    </CardContent>
  </Card>
))

export default function StaffCard() {
  return (
    <Box className="memberCard--container">
      <h1 style={{ textAlign: 'center' }}>Meet the Team</h1>
      <Card
        className="memberCard--component"
        variant="outlined"
        sx={{ display: 'flex', justifyContent: 'center', border: 0 }}>
        {memberCard}
      </Card>
    </Box>
  )
}
