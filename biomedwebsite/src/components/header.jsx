import { useState } from 'react'
import logo from '../images/logo.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import '../styles/header.css'

export default function Header() {

  return (
    <div className='site_block'>
      <header className='header'>
        <div className='title'>
          <img className='logo_photo' src={logo}></img>
          <h2 className='club_name'>Alberta Bionix</h2>
        </div>
        <div className='links'>
          <a>Home</a>
          <a>Projects</a>
          <a>Contact</a>
          <img className='insta' src={instagram}></img>
          <img className='linkedin' src={linkedin}></img>
        </div>
      </header>
    </div>
  )
}
