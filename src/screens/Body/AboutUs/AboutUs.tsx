import React from 'react'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

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
    <div className="info--container">
      <p style={{ width: '40%' }}>
        Nuestra Academia de Tenis nace como fruto de las entrañas de nuestra familia. Desde nuestros
        abuelos, el tenis siemre fue nuestra inspiración y motivación, la base de los valores de
        superación, optimismo, resiliencia y la gran semilla que fuimos cultivando a través de los
        años permitiendo a nuestros hijos estudiar becados en Estados Unidos gracias al tenis.
        <p>
          Acompañamos, según las edades, la formación personal, profesional y una vida saludable,
          emocionalmente, a través del acompañamiento de coach y también con acompañamiento
          nutricional. En nuestra academia los niños se forman deportivamente en un ámbito de
          amistad, familiar y de contención. Los jóvenes pueden prepararse, si lo desean, para que
          el tenis sea un puente que les permita conseguir una beca para sus estudios universitarios
          en EEUU y a los adultos formar un grupo de amigos que los une y distrae mas allá del
          tenis.
        </p>
        Nuestro propósito es inspirarte y motivarte para que a través del tennis como juego y
        disciplina, logres tu mejor versión, potencies tus talentos, desafíes tus propios limites y
        te perfecciones día a día dando lo mejor dentro y fuera de la cancha pues buscamos un
        desarrollo integral de la persona.
      </p>
      <BorderLinearProgress
        className="stats--component"
        variant="determinate"
        value={60}
        style={{ width: '40%' }}
      />
    </div>
    {/*  <div className="stats--container" > */}
    {/* </div> */}
  </div>
)

export default AboutUs
