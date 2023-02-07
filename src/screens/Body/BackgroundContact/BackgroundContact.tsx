import React from 'react'
import { Link } from 'react-router-dom'

const BackgroundImage = () => (
  <div className="backgroundImage--component">
    <p> Create your own program, adjust it at your convinience</p>
    <Link className="backgroundContact--btn" to={'/Contact'}>
      Contact Us
    </Link>
  </div>
)

export default BackgroundImage
