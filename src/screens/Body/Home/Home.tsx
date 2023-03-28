import Carousel from 'react-material-ui-carousel'
import { Image } from 'mui-image'
import './Home.css'

export const images = [
  {
    imgPath: require('../../../images/Carousel-imagen1.jpg'),
  },
  {
    imgPath: require('../../../images/Carousel-imagen2.jpg'),
  },
  {
    imgPath: require('../../../images/Carousel-image3.jpg'),
  },
  {
    imgPath: require('../../../images/Carousel-image4.jpg'),
  },
  {
    imgPath: require('../../../images/Carousel-image5.jpg'),
  },
]

function Home(props: any) {
  return (
    <Carousel className="carousel--component">
      {images.map((image, idx) => (
        <Image className="carousel--image" src={image.imgPath} key={idx} />
      ))}
    </Carousel>
  )
}

export default Home
