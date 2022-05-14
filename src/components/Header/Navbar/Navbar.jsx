import React from 'react'
import './Navbar.css'
import { BsChevronDown } from "react-icons/bs";
import Image from '../../UI/image/Image';
const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="nav-list">
            <li>About <span className="nav-icon"> <BsChevronDown /></span></li>
            <li>Job Search</li>
            <li>Candidates <span className="nav-icon"><BsChevronDown /></span></li>
            <li>Employers<span className="nav-icon"> <BsChevronDown /></span></li>
            <li>Latest News</li>
            <li>Contact</li>
        </ul>
        <div className="hamburger">
          <Image src="assets/images/hamburger.png" alt="hamburger" className="hamburger" />
        </div>


    </nav>
  )
}

export default Navbar