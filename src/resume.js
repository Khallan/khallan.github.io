import React from 'react';
import './App.css';
import Resume from './KJ-Resume.jpg';

function resume() {
    return (
        <div className='resume'>
            <img src={Resume} className='Resume' />
        </div>
    );
}
export default resume;