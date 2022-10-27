import React from 'react';
import './app.css';
import { Link }  from 'react-router-dom';

function Nav() {
  const navStyle ={
    color: 'white'
  };
  
  return (
    <nav>
        <h3>Khallan's Website</h3>
        <ul className='nav-links'>
          <Link style={navStyle} to='/app'>
          <li>Home</li>          
          </Link>
          <Link style={navStyle} to='/internshiplogs'>
            <li>Internship Logs</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;