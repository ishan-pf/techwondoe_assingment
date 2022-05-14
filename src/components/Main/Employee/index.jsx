import React,{useState, useEffect} from 'react'
import './Employee.css'
import EmployeeCard from './EmployeeCard'
import {urlFor , client} from '../../../client'

const Employees = () => {

    const [employeeData , setEmployeeData] = useState([])

    useEffect(() => {

        const query = '*[_type == "testimonials"]'
        
        client.fetch(query).then(data => setEmployeeData(data))
        
      },[])
    

  return (
    <div className="Employee">
    {
        employeeData.map((employee) => (

        <EmployeeCard 
        src={urlFor(employee.src)} 
        alt={employee.alt} 
        title={employee.title} 
        description={employee.description}
        bgcolor={employee.bgcolor}
         />

        ))
    }
    </div>
  )
}

export default Employees