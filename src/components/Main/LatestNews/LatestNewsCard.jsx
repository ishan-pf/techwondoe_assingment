import React from 'react'
import Image from '../../UI/image/Image'
import './LatestNewsCard.css'

const LatestNewsCard = (props) => {
  return (
    <div className="LatestNewsCard">
        <Image src={props.src} alt={props.alt} className="LatestNewsCard-image" />
        <div className="LatestNewsCard-publish">by {props.author} | {props.date}</div>
        <div className="LN-title">{props.title}</div>

        <div className="LN-link"><span>Read more</span><img src="/assets/images/arrow-right.png" alt="arrow-right"/></div>
    </div>
  )
}

export default LatestNewsCard