import React from 'react';
import './app.css';
import Nav from './Nav';
import internshiplogs from './internshiplogs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function app() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
        <Route path="internshiplogs" element={internshiplogs} />
        </Routes>
      </div>
    </Router>
  );
}

export default app;