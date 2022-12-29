import React from 'react';
import './App.css';
import pfp from './pfp.jpg';
function Aboutme() {
    return (
        <div>
            <div className='about-me-header'>Software Engineer Intern</div>
            <img src={pfp} className='pfp' />
            <div className='Resume-Blurb'>
                <h1 className='About-Header'> Some of my previous work... </h1>
                <li>Software Engineer Intern at North P&D </li>
                <li>Programming Languages: Javascript, Java, HTML and CSS programming</li>
                <li>Tutoring young children in Mathematics and Science</li>
                <li>Punctual, Confident</li>
                <li>Languages: Limited French</li>
                <br />
                If you would like to see my full resume click <i>Resume</i> at the top of the screen
                
            </div>
            {/* <img src={KJResume} className='resume' /> */}
        </div>
    );
}
export default Aboutme;