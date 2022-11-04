import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./Home.css"
import {Image} from "mui-image"






const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const images = [
  {
    imgPath:
      require('../../../images/home--image1.jpeg')      ,

  },
  {
    imgPath:
      require('../../../images/home--image2.jpeg')      ,

  },
  {
    imgPath:
    require('../../../images/home--image3.png' )    ,

  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box  className="carousel--container" sx={{ maxWidth: '100%', flexGrow: 1 }}>

      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) =>  {
        
          return (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image className="carousel--image"
                
   
                src={step.imgPath}
              />
            ) : null}
          </div>
        )})}
      </AutoPlaySwipeableViews>
{/*       <MobileStepper className="carousel-bottom"
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        nextButton={
          <Button 
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
