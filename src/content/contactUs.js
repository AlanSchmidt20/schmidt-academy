import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import PlaceIcon from '@mui/icons-material/Place'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const contactUs = [
  {
    title: 'Address:',
    icon: <PlaceIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />,
    description: ' Ituzaingo 251, Lomas de Zamora, Buenos Aires',
  },
  {
    title: 'Phone:',
    icon: <PhoneInTalkIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />,
    description: `ARGENTINA + 54 9 115-428-7456 / 
    \r
    \nUSA + 1 786-834-7226 / COLOMBIA +57 316-482-0034`,
  },
  {
    title: 'Email: ',
    icon: <EmailIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />,
    description: 'schmidttennisacademy@gmail.com',
  },
  {
    title: 'Social Media: ',
    iconOne: <InstagramIcon fontSize="medium" sx={{ ml: 1, color: '#007bff' }} />,
    inconTwo: <LinkedInIcon fontSize="medium" sx={{ ml: 1, color: '#007bff' }} />,
    iconThree: <WhatsAppIcon fontSize="medium" sx={{ ml: 1, color: '#007bff' }} />,
  },
]
