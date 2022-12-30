import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import HomeIcon from '@mui/icons-material/Home'

export const services = [
  {
    icon: <SportsTennisIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Tennis',
    description:
      'Ofrecemos clases de tenis que se adecuen a tus necesidades, de cualquier edad y nivel.',
  },
  {
    icon: <FitnessCenterIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Conditioning',
    description:
      'Ofrecemos un gimansio con toda la maquinaria disponible para elevar tu fisico al siguiente nivel junto con un entrenador fisico',
  },
  {
    icon: <LocalDiningIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Nutrition',
    description:
      'Ofrecemos clases de tenis que se adecuen a tus necesidades, de cualquier edad y nivel.',
  },
  {
    icon: <HomeIcon fontSize="large" sx={{ mt: 2 }} />,
    service: 'Accommodation',
    description:
      'Viviras en la mansion Schmidt con multiples facilidades como baño al intemperie, loft, entre otros.',
  },
]
