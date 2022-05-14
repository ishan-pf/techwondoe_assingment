import React from 'react'
import Image from '../image/Image'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
        <div className="Card-heading">
            <Image src="./assets/images/Vector.png" alt="tick-read" className="Card-Image" />
            <h3>{props.title}</h3>
        </div>
        <div className="Card-description">
            <p>{props.description}</p>
        </div>

    </div>
  )
}

export default Card