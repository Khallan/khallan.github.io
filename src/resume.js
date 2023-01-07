import React from 'react';
import './App.css';
import Resume from './resume.png';

function resume() {
    return (
        <div className='resume'>
            <h1 className='resume-header'>Khallan Jamal</h1>
            <img src={Resume} className='Resume' />
        </div>
    );
}
export default resume;