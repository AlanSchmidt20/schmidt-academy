import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import CheckIcon from '@mui/icons-material/Check'
import ListItemText from '@mui/material/ListItemText'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { programs } from '../../../content/programs'

const programCard = programs.map(program => (
  /*   <Card
    className="program--component"
    sx={{ maxWidth: 300, height: 400, margin: '0 10', textAlign: 'center' }}>
    <CardContent className="program--container">
      <Typography
        gutterBottom
        className="program--item"
        variant="h5"
        component="div"
        sx={{ marginBottom: 0, fontWeight: 'bold' }}>
        {program.category}
      </Typography>
      <Typography gutterBottom className="program--item" variant="body1" sx={{ marginTop: 0 }}>
        {program.item1}
      </Typography>
      <Typography variant="body2" className="program--item" color="text.secondary">
        {program.item2}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Sumate</Button>
    </CardActions>
  </Card> */
  <Card className="program--component" sx={{ maxWidth: 300, height: 340 }}>
    <List className="list--container">
      <Typography
        gutterBottom
        className="program--item"
        variant="h5"
        sx={{ marginTop: 0, textAlign: 'center', fontWeight: 'bold' }}>
        {program.category}
      </Typography>
      <ListItem className="listItem--container">
        <ListItemAvatar className="icons--container">
          <CheckIcon
            className="program--icon"
            fontSize="small"
            /* sx={{ display: 'block', marginLeft: '20px', marginBottom: '10px', color: 'green' }} */
          />
          <CheckIcon
            className="program--icon"
            fontSize="small"
            /* sx={{ display: 'block', marginLeft: '20px', marginBottom: '10px', color: 'green' }} */
          />
        </ListItemAvatar>
        <ListItemText className="item--text" primary={program.item1} secondary={program.item2} />
      </ListItem>
      <Button className="program--button" variant="contained">
        Sumate
      </Button>
    </List>
  </Card>
))

export default function OutlinedCard() {
  return (
    <Box className="programCard--container">
      <h1 style={{ textAlign: 'center' }}>Our Pograms</h1>
      <Card
        className="programCard--component"
        variant="outlined"
        sx={{ display: 'flex', justifyContent: 'center', border: 0 }}>
        {programCard}
      </Card>
    </Box>
  )
}
