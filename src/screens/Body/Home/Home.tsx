/* import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import './Home.css'
import { Image } from 'mui-image'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export const images = [
  {
    imgPath: require('../../../images/home--image1.jpeg'),
  },
  {
    imgPath: require('../../../images/home--image2.jpeg'),
  },
  {
    imgPath: require('../../../images/home--image3.png'),
  },
]

function SwipeableTextMobileStepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box className="carousel--container" sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {images.map((step, index) => {
          return (
            <div key={index} style={{ height: '800px' }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image className="carousel--image" src={step.imgPath} />
              ) : null}
            </div>
          )
        })}
      </AutoPlaySwipeableViews>
    </Box>
  )
}

export default SwipeableTextMobileStepper
 */
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Image } from 'mui-image'
import './Home.css'

export const images = [
  {
    imgPath: require('../../../images/home--image1.jpeg'),
  },
  {
    imgPath: require('../../../images/home--image2.jpeg'),
  },
  {
    imgPath: require('../../../images/home--image3.png'),
  },
]

function home(props: any) {
  return (
    <Carousel height="800px">
      {images.map(image => (
        <Image className="carousel--image" src={image.imgPath} />
      ))}
    </Carousel>
  )
}

/* function Item(props: any) {
  return (
    
    <Carousel>

    <Box>
      {images.map(image => (
        <Image  src={image.imgPath} />
      ))}
    </Box>

    </Carousel>
  )
} */

export default home
