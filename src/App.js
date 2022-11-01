import React from 'react';
import './App.css';
import Nav from './Nav';
import Internshiplogs from './internshiplogs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Aboutme from './aboutme';

function app() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Aboutme />
        <Routes>
        <Route path='/' element={<app />}/>
        <Route path='internshiplogs' element={<Internshiplogs />}/>
        </Routes>
      </div>
    </Router>
  );
}
export default app;