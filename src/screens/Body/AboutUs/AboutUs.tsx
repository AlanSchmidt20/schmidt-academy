import React from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { Image } from 'mui-image'
import aboutUsBody from '../../../images/AboutUsBody.png'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 500],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))
const AboutUs = () => (
  <div className="aboutUs--container">
    <h1 style={{ textAlign: 'center' }}>About Us </h1>
    <div className="info--container" style={{ width: '90%', marginBottom: '20px' }}>
      <Image className="aboutUs--image" src={aboutUsBody} style={{ width: '50%' }} />

      <p
        className="aboutUs--text"
        style={{
          width: '60%',
          marginTop: '30px',
          fontSize: 'large',
          lineHeight: 1.2,
          fontWeight: 400,
        }}>
        Our Tennis Academy was born as a fruit of the bowels of our family. from our grandparents,
        tennis was always our inspiration and motivation, the basis of the values of improvement,
        optimism, resilience and the great seed that we were cultivating through the years years
        allowing our children to study on scholarships in the United States thanks to tennis.
        <p>
          We accompany, according to the ages, personal and professional training and a healthy
          life, emotionally, through the accompaniment of the coach and also with accompaniment
          nutritional. In our academy children are trained in sports in an environment of
          friendship, family and support. Young people can prepare themselves, if they wish, for
          tennis is a bridge that allows them to get a scholarship for their university studies in
          the US and adults form a group of friends that unites them and distracts beyond the
          tennis.
        </p>
        Our purpose is to inspire and motivate you so that through tennis as a game and discipline,
        achieve your best version, enhance your talents, challenge your own limits and you improve
        day by day giving your best on and off the field because we are looking for a integral
        development of the person.
      </p>
    </div>
    {/*  <div className="stats--container" > */}
    {/* </div> */}
  </div>
)

export default AboutUs
