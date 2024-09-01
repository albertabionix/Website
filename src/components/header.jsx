import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle the sidebar visibility
  function showSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  // Function to handle screen resize and update sidebar visibility
  function handleResize() {
    if (window.innerWidth > 600) {
      setSidebarVisible(false); // Hide sidebar if screen width is more than 600px
    }
  }

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='site_block'>
      <header className='header'>
        <div className='title'>
          <img className='logo_photo' src={logo} alt="Alberta Bionix Logo"></img>
          <h2 className='club_name'>Alberta Bionix</h2>
        </div>
        <div className='links'>
          <div className='main_links'>
            <Link to="/Website/" className='nav_link'>Home</Link>
            <Link to="/projects" className='nav_link'>Projects</Link>
            <Link to="/contact" className='nav_link'>Contact</Link>
            <a href='https://www.instagram.com/albertabionix/' target='blank'>
              <img className='insta' src={instagram} alt="Instagram"></img>
            </a>
            <a href='https://www.linkedin.com/company/uabiomed/?originalSubdomain=ca' target='blank'>
              <img className='linkedin' src={linkedin} alt="LinkedIn"></img>
            </a>
          </div>

          {/* Trigger for showing/hiding the sidebar */}
          <a className='drop-down-menu' onClick={showSidebar}>
            <svg width="30px" height="30px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.7761 13.7761 8 13.5 8H1.5C1.22386 8 1 7.7761 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="#000000"
              />
            </svg>
          </a>

          {/* Sidebar menu */}
          <ul className={`drop_down_menu_contents ${sidebarVisible ? 'visible' : 'hidden'}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href='https://www.instagram.com/albertabionix/' target='blank'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/uabiomed/?originalSubdomain=ca' target='blank'>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}
