import React from 'react';
import './App.css';
import Nav from './Nav';
import Internshiplogs from './internshiplogs';
import Resume from './resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutme from './Aboutme';


function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Nav />
        <div className='MainElementPadding'>
          <Routes>
            <Route path='/' element={<app />} />
            <Route path='aboutme' element={<Aboutme />} />
            <Route path='internshiplogs' element={<Internshiplogs />} />
            <Route path='Resume' element={<Resume />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;