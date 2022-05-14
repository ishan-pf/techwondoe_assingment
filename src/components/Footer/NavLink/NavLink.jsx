import React from 'react'
import './NavLink.css'

const NavLink = () => {
  return (
    <div className="navlink">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Candidates</li>
        </ul>
        <ul>
            <li>Employers</li>
            <li>Latest News</li>
            <li>Contact</li>
        </ul>
        <ul className="list2">
            <li>+62 (0) 9 124 5470</li>
            <li>careers@namespace.com</li>
        </ul>
        <ul className="list4">
            <li>Level 379 High Street Melbourne CBD1010</li>
        </ul>
    </div>
  )
}

export default NavLink