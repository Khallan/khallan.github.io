import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav>
      <h1>Khallan Jamal</h1>
      <div className='nav-link'>
        <Link style={navStyle} to='/aboutme'>
          <div>Home</div>
        </Link>
      </div>      
      <div className='nav-link'>
        <Link style={navStyle} to='/home'>
          <div>Career Portfolio</div>
        </Link>
      </div>
      <div className='nav-link'>
        <Link style={navStyle} to='/resume'>
          <div>Resume</div>
        </Link>
      </div>
      <div className='nav-links'>
        <Link style={navStyle} to='/Achievements'>
          <div>Academic Achievements</div>
        </Link>
      </div>
      <div className='nav-links'>
        <Link style={navStyle} to='/Involvment'>
          <div>Involvment</div>
        </Link>
      </div>
      <div className='nav-links'>
        <Link style={navStyle} to ='/Promo'>
          <div>Promo Video</div>
        </Link>
      </div>
      {/* <div className='nav-link'>
        <Link style={navStyle} to='/internshiplogs'>
          <div>Internship Logs</div>
        </Link>
      </div> */}
    </nav>
  );
}

export default Nav;