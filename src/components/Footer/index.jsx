import React from 'react'
import NavLink from './NavLink/NavLink'
import './Footer.css'
const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="footer-link"> 
                <img src="assets/images/fbbook.png" alt="facebook" className="" />
                <img src="assets/images/linked.png" alt="linkedin" className="" />
                <img src="assets/images/instagram.png" alt="instagram" className="" />
            </div>
            <NavLink />
        </div>
        <div className="copyright">Copyright © 2021 - Beyond Ltd. </div>
    </div>
  )
}

export default Footer