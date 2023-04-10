import './TestimonialsScreen.css'
import { testimonialsDescription } from '../../../content/testimonialsScreen'

const TestminonialsCard = testimonialsDescription.map(testimonialItem => {
  const { id /* , name, country, subTitle, description, image  */ } = testimonialItem

  const isLargeText = id === 3

  return (
    <div key={testimonialItem.id} className="testimonialsScreen--container">
      <div className="testimonialsScreen-image-container">
        <img
          className="testimonialScreen-image"
          src={`${testimonialItem.image}`}
          width="400px"
          alt={`${testimonialItem.name}`}
        />
      </div>
      <div className="testimonialsScreen-information-container">
        <h1>{testimonialItem.name}</h1>
        <h2>{testimonialItem.country}</h2>
        <h3>{testimonialItem.subTitle}</h3>
        <p
          className={`testimonialsScreen-description ${isLargeText ? 'large-text' : ''}`}>
          {testimonialItem.description}
        </p>
      </div>
    </div>
  )
})

const TestimonialsScreen = () => {
  return <div className="testimonialsScreen-component">{TestminonialsCard}</div>
}

export default TestimonialsScreen
