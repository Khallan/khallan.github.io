import React from 'react';
import './app.css';
import Nav from './Nav';
import Internshiplogs from './Internshiplogs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function app() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
        <Route path='/' element={<app />}/>
        <Route path='internshiplogs' element={<Internshiplogs />}/>
        </Routes>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>

);

export default app;