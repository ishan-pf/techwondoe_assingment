import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import Image from '../UI/image/Image'

const Header = () => {
  return (
    <header className="header">
        <Navbar />
        <Image 
        src="./assets/images/hero_image.png" 
        alt="hero-pic" 
        className="hero-image" 
       />
       <div className="header-imgtext">Take the leap with us</div>

    </header>
  )
}

export default Header