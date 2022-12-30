import icon from '../../../images/schmidt-academy-logo.jpeg'
import { Image } from 'mui-image'

const ImageLogo = () => (
  <div className="icon--parent">
    <Image
      className="header--icon"
      src={icon}
      fit="contain"
      style={{ background: 'transparent', animation: 'none' }}
    />
  </div>
)

export default ImageLogo
