import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { programsDescription } from '../../content/programsDescription'
import Box from '@mui/material/Box'
import { CardActions } from '@mui/material'
import { useRef, useState } from 'react'
import FormDialog from './ProgamModal/ProgramModal'

export default function ProgramsInformation() {
  const asd = useRef<HTMLDivElement>(null!)

  const [modalOpen, setModalOpen] = useState(false)

  const handleClickOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }
  var open = 'something' //temporary solution for keyword error
  return (
    <Box className="" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card className="" variant="outlined" sx={{ border: 'none' }}>
        {programsDescription.map((programDescription, idx) => (
          <div ref={asd} key={idx}>
            <Card
              className="programsCard--wrapper"
              sx={{
                boxShadow: 'none',
                display: 'flex',
                margin: 10,
                height: '450px',
                width: '95%',
              }}>
              <CardMedia
                component="img"
                /* height="400px" */ src={`${programDescription.img}`}
              />
              <CardContent className="programsCard--content" sx={{ width: '100%' }}>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  fontFamily="Helvetica Neue LT">
                  {programDescription.title}
                </Typography>
                <Typography
                  gutterBottom
                  fontFamily="Helvetica Neue LT"
                  className="programCard--subDescription"
                  variant="body1">
                  {programDescription.description}
                </Typography>
                <Typography
                  className="programCard--subTitle"
                  gutterBottom
                  fontFamily="Helvetica Neue LT"
                  variant="body1">
                  {programDescription.ageTitle}
                </Typography>
                <Typography
                  gutterBottom
                  fontFamily="Helvetica Neue LT"
                  className="programCard--subDescription"
                  variant="body1">
                  {programDescription.subDescription}
                </Typography>
                <Typography
                  gutterBottom
                  fontFamily="Helvetica Neue LT"
                  className="programCard--subTitle"
                  variant="body1">
                  {programDescription.trainingTitle}
                </Typography>
                <ul
                  className="programCard--subDescription"
                  style={{
                    margin: 0,
                    paddingInlineStart: 'inherit',
                    fontFamily: 'Helvetica Neue LT',
                    fontSize: 'medium',
                  }}>
                  <li>{programDescription.tennisTime}</li>
                  <li>{programDescription.physicalTime}</li>
                </ul>
                <CardActions className="programCard--actionArea">
                  <Button
                    onClick={handleClickOpen}
                    className="programCard--button"
                    variant="contained"
                    size="large"
                    color="warning">
                    MORE INFO
                  </Button>
                  <Button
                    onClick={handleClickOpen}
                    className="programCard--button"
                    variant="outlined"
                    size="large"
                    color="warning">
                    SCHEDULE A CAMP
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </div>
        ))}
      </Card>
      {modalOpen && <FormDialog open={open} onClose={handleClose} />}
    </Box>
  )
}
