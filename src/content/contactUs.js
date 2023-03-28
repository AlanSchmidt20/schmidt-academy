import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export const contactUs = [
  /*   {
    title: 'Address:',
    icon: (
      <a
        href="https://www.google.com/maps/place/Temperley+Lawn+Tennis+Club/@-34.7705279,-58.396073,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcd2dd52a3651d:0x4936d4d53a711abf!8m2!3d-34.7704324!4d-58.3939634"
        target="_blank">
        <PlaceIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />
      </a>
    ),
    description: ' Ituzaingo 251, Lomas de Zamora, Buenos Aires',
  }, */
  {
    title: 'Phone:',
    icon: (
      <a /*  href="" target="_blank" */>
        <PhoneInTalkIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />
      </a>
    ),
    description: `ARGENTINA + 54 9 115-428-7456 / 
    \r
    \nUSA + 1 786-834-7226 / COLOMBIA +57 316-482-0034`,
  },
  {
    title: 'Email: ',
    icon: (
      <a href="mailto:schmidttennisacademy@gmail.com" target="_blank" rel="noreferrer">
        <EmailIcon fontSize="medium" sx={{ ml: 1, mr: 1, color: '#007bff' }} />
      </a>
    ),
    description: 'schmidttennisacademy@gmail.com',
  },
  {
    title: 'Social Media: ',
    iconOne: (
      <a
        href="https://www.instagram.com/schmidt_tennis_academy/"
        target="_blank"
        rel="noreferrer">
        <InstagramIcon fontSize="medium" sx={{ ml: 1, color: '#007bff' }} />
      </a>
    ),
    iconTwo: (
      <a /* href="" target="_blank" */>
        <WhatsAppIcon fontSize="medium" sx={{ ml: 1, color: '#007bff' }} />
      </a>
    ),
  },
]
