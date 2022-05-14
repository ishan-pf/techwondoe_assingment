import React,{useState, useEffect} from 'react'
import './WhyChooseUs.css'

import Card from '../../UI/Card'
import {client} from '../../../client'


const WhyChooseUs = () => {

  const [serviceData , setServiceData] = useState([]);

  useEffect(() => {

    const query = '*[_type == "whychooseus"]'
    
    client.fetch(query).then(data => setServiceData(data))

  },[])

  return (
    <div className="whyChooseUs">
        <div className="whyChooseUs-heading">
            <h3>Why Choose us?</h3>
            <p>We have decades of experience, having successfully recruited across the globle for many years.</p>
        </div>
        <div className="whyChooseUs-Card">
        {
            
          serviceData.map((data) => (

                <Card title={data.title} description={data.description} />
            ))
            
        }
        </div>


    </div>
  )
}

export default WhyChooseUs