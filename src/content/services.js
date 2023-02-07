import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import HomeIcon from '@mui/icons-material/Home'

export const services = [
  {
    icon: <SportsTennisIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Tennis',
    description:
      'Our tennis program offer classes that suits your needs, based on your age and level. Looking for the best plan to make you a better player.',
  },
  {
    icon: <FitnessCenterIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Conditioning',
    description:
      'Our conditoning service offers a gym and a personal trainer to raise your physical condition to the next level and improve your performance.',
  },
  {
    icon: <LocalDiningIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Nutrition',
    description:
      'Our nutritional program is designed to provide our players enough energy and the necessary nutrients in order to enhance their performance.',
  },
  {
    icon: <HomeIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Accommodation',
    description:
      'We offer accommodation and transportation. Our purpose is to make our players feel comfortable and like they are at home.',
  },
]
