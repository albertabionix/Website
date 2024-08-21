import { useState } from 'react'
import logo from '../images/logo.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {

  return (
    <nav className='site_block'>
      <header className='header'>
        <div className='title'>
          <img className='logo_photo' src={logo}></img>
          <h2 className='club_name'>Alberta Bionix</h2>
        </div>
        <div className='links'>
          <Link to="/" className='nav_link'>Home</Link>
          <Link to="/projects" className='nav_link'>Projects</Link>
          <Link to="/contact" className='nav_link'>Contact</Link>
          <a href='https://www.instagram.com/albertabionix/' target='blank'>
            <img className='insta' src={instagram}></img>
          </a>
          <a href='https://www.linkedin.com/company/uabiomed/?originalSubdomain=ca' target='blank'>
          <img className='linkedin' src={linkedin}></img>
          </a>
        </div>
      </header>
    </nav>
  )
}
