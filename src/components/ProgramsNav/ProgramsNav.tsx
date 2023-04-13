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
  const videoRef = useRef<HTMLVideoElement>(null)

  const [modalOpen, setModalOpen] = useState(false)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handleClickOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }
  var open = 'something' //temporary solution for keyword error
  return (
    <Box
      className="programCard-component"
      sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card className="" variant="outlined" sx={{ border: 'none' }}>
        {programsDescription.map((programDescription, idx) => {
          const isVideo = programDescription.id === 1
          const isIntensive = programDescription.id === 2 || programDescription.id === 4
          const isTournament = programDescription.id === 1
          return (
            <div ref={asd} key={idx} className="programsCard--wrapper">
              <Card
                className="programsCard--wrapper"
                sx={{
                  boxShadow: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  height: '450px',
                  width: '95%',
                }}>
                <CardMedia
                  /* height="400px" */
                  component={isVideo ? 'video' : 'img'}
                  className="programImage"
                  src={`${programDescription.img}`}
                  {...(isVideo && { autoPlay: true })}
                  {...(isVideo && { playsInline: true })}
                  {...(isVideo && { onClick: handleVideoClick })}
                  {...(isVideo && { ref: videoRef })}
                />
                <CardContent
                  className={isVideo ? 'isVideo-content' : 'programsCard--content'}
                  sx={{ width: '100%' }}>
                  <Typography gutterBottom variant="h3" component="div" fontWeight="bold">
                    {programDescription.title}
                  </Typography>
                  {/*                   <Typography
                    gutterBottom
                    className="programCard--subDescription"
                    variant="body1">
                    {programDescription.description}
                  </Typography> */}
                  <Typography
                    className="programCard--subTitle"
                    gutterBottom
                    variant="body1">
                    {programDescription.ageTitle}
                  </Typography>
                  <Typography
                    gutterBottom
                    className="programCard--subDescription"
                    variant="body1">
                    {programDescription.subDescription}
                  </Typography>
                  <Typography
                    gutterBottom
                    className="programCard--subTitle"
                    variant="body1">
                    {programDescription.trainingTitle}
                  </Typography>
                  <ul
                    className="programCard--subDescription"
                    style={{
                      margin: 0,
                      paddingInlineStart: 'inherit',

                      fontSize: 'medium',
                    }}>
                    <li>
                      {programDescription.tennisTime}
                      {isIntensive && (
                        <ul className="isItensive-list">
                          <li>{programDescription.tennisMorning}</li>
                          <li>{programDescription.tennisAfternoon}</li>
                        </ul>
                      )}
                    </li>
                    {isTournament && <li>{programDescription.amateourTennis}</li>}
                    {isTournament && <li>{programDescription.tournament}</li>}
                    {isTournament && <li>{programDescription.shareExperiences}</li>}
                    {!isTournament && <li>{programDescription.physicalTime}</li>}
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
          )
        })}
      </Card>
      {modalOpen && <FormDialog open={open} onClose={handleClose} />}
    </Box>
  )
}
