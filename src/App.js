import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Internshiplogs from './internshiplogs';
import Achievements from './Achievements';
import Involvment from './Involvment';
import Promo from './Promo';
import Resume from './resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutme from './Aboutme';


function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Nav />
        <div className='MainElement'>
          <Routes>
            <Route path='/' element={<app />} />
            <Route path='home' element={<Home />} />
            <Route path='aboutme' element={<Aboutme />} />
            <Route path='internshiplogs' element={<Internshiplogs />} />
            <Route path='Resume' element={<Resume />} />
            <Route path='Achievements' element={<Achievements />} />
            <Route path='Involvment' element={<Involvment />} />
            <Route path='Promo' element={<Promo />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}
export default App;