import React from 'react'
import './EmployeeCard.css'
import Typography from '../../UI/Typography/Typography'
const EmployeeCard = (props) => {
   
  return (
    <div className="EmployeeCard">
        <div className="EmployeeCard-header" >
            <div className="EmployeeCard-container" style={{backgroundColor: props.bgcolor}} ><img src={props.src} alt={props.alt} className="EmployeeCard-Image"  /></div>
            <Typography variant='h3' fontWeight="600" >{props.title}</Typography>
            {/* <h3>{props.title}</h3> */}
        </div>
       <Typography variant='body1' fontWeight="400" fontsize="16">{props.description}</Typography>
       <div className="EmployeeCard-Link">Learn more</div>
    </div>
  )
}

export default EmployeeCard