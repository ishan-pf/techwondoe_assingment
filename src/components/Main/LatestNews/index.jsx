import React,{useState, useEffect} from 'react'
import Button from '../../UI/Button/Button'
import './LatestNews.css'
import LatestNewsCard from './LatestNewsCard'
import {urlFor , client} from '../../../client'


const LatestNews = () => {

  const [cardData , setCardData] = useState([])

  // console.log(cardData)
  useEffect(() => {

    const query = '*[_type == "latestnews"]'
    
    client.fetch(query).then(data => setCardData(data))

  },[])

  return (
    <div className="LatestNews">
        <div className="LatestNews-header">
            <h2>Latest News</h2>
            <Button className="LatestNews-btn">View All</Button>
        </div>
          <div className="LatestNews-Card">
        {
          cardData.map((card) => (

            <LatestNewsCard 
            src={urlFor(card.src)}
            title={card.title} 
            alt={card.alt} 
            date={card.date} 
            author={card.author} 
            />

          ))
        }
        </div>
    </div>
  )
}

export default LatestNews