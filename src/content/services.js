import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import HomeIcon from '@mui/icons-material/Home'

export const services = [
  {
    icon: <SportsTennisIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'TENNIS',
    description:
      "Our tennis program offer classes that suits our player's needs, based on their age and level. Looking for the best plan to make them a better players.",
  },
  {
    icon: <FitnessCenterIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'CONDITIONING',
    description:
      'Our conditoning service offers a gym and a personal trainer to raise their physical condition to the next level and improve their perfomance.',
  },
  {
    icon: <LocalDiningIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'NUTRITION',
    description:
      'Our nutritional program is designed to provide our players enough energy and the necessary nutrients in order to enhance their health.',
  },
  {
    icon: <HomeIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'HOUSING',
    description:
      'We offer comfortable accommodations and convenient transportation. We want our players to feel at ease and at home.',
  },
]
