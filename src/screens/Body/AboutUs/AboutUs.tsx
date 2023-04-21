import { colors } from '@mui/material'
import { Image } from 'mui-image'
import aboutUsBody from '../../../images/AboutUsBody.png'

const AboutUs = () => (
  <div className="aboutUs--container">
    <h1
      style={{ textAlign: 'center', fontSize: '60px', fontFamily: 'Helvetica Neue LT' }}>
      ABOUT US
    </h1>
    <div className="info--container" style={{ width: '90%', marginBottom: '20px' }}>
      <Image className="aboutUs--image" src={aboutUsBody} style={{ width: 'auto' }} />

      <p
        className="aboutUs--text"
        style={{
          width: '61%',
          marginTop: '30px',
          fontSize: 'large',
          lineHeight: 1.9,
          fontWeight: 300,
          textAlign: 'justify',
        }}>
        Our Tennis Academy was born as a result of the passion that has always existed in
        our family for this sport. Since our grandparents,{' '}
        <span style={{ color: '#eb8611' }}>
          tennis has been our inspiration and motivation
        </span>
        , and has served as the basis for our values of growth, optimism, resilience, and
        the great seed that we have been cultivating over the years, allowing our children
        to study in the United States on scholarships obtained through tennis.
        <p>
          At our academy, children are trained in sports in an{' '}
          <span style={{ color: '#1d70b7' }}>
            environment of friendship, family, and support
          </span>
          . Young people can prepare themselves, if they wish, for tennis to be a bridge
          that allows them to obtain a{' '}
          <span style={{ color: '#39b3ad' }}>
            scholarship for their university studies in the United States
          </span>
          , while adults can form a group of friends who are united and distracted beyond
          tennis.
        </p>
        We provide personalized and professional training and conditioning for a healthy
        lifestyle, tailored to different age groups. Our coaching services are
        complemented by nutritional guidance to improve and enhance your performance. Our
        purpose is to inspire and motivate you so that through tennis as a game and
        discipline,
        <span className="violet-text" style={{ color: '#9a42b1' }}>
          {' '}
          you achieve your best version, enhance your talents, challenge your own limits,
          and improve day by day
        </span>
        , giving your best on and off the court, as we seek integral development of the
        person.
      </p>
    </div>
    {/*  <div className="stats--container" > */}
    {/* </div> */}
  </div>
)

export default AboutUs
