import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='left-nav'>

        
        </div>
         <ul className="right-nav">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/skills">Skills</NavLink></li>
           <li><NavLink to="/projects">Projects</NavLink></li>
           <li>
            <NavLink to="/contact" className="contact-btn">Contact</NavLink>
           </li>
      </ul>
    </div>
  )
}

export default Navbar
