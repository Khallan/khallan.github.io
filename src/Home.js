import React from 'react';
import './App.css';
import TS from './TS.png';
import TScode from './TSCODE.png';
import Sample from './sample.png';
import Term from './term.png';
import ReactPhoto from './reactphoto.png';

function home() {
    return (
        <div>
            <h1>Career Portfolio</h1>
            <div className='opening-sub'>Here you will find a few of my main tasks at <i>North P&D</i></div>
            <br />
            <div className='career-list-header'>1. Web Devolpment
                <div>
                    My main task at this placement is of course Web Devolpment, I used my skill that I learned from <i>North P&D</i> to make this project my first task at this placement was to learn Javascript and make this exact website, I then re-used that website to make this project. As you explore this webiste you will be able to see a small bit of everthing I learned.
                </div>
            </div>
            <br />
            <div className='career-list-header'>2. React Router
                <div>
                    Most of my time at <i>North P&D</i> was spent using this library. React Router is used to make different tabs on a webpage, here is a sample of the code....
                </div>
            </div>
            <br />
            <div className='career-list-header'>3. Adding Features and Pages to <i>North P&D</i>
                <div>
                    A few of my recent tasks at <i>North P&D</i>, are to add a Blog Page, FAQ Page and a Team Section. Here is the Team Section Page and the code ...
                </div>
            </div>
            <br />
            <div className='career-list-header'>4. The Terminal</div>
            <div>
                Whenever you code anything, you need a place that lets you see what you are doing and to see if there are any bugs, we had to learn a whole new system of lines of code...
            </div>
            <br />
            <div className='career-list-header'>5. Reading Code</div>
            <div>
                When beginning a new task I have to read the code already created by my supivisor, such as, when I started on <i>North P&D's</i> website I had to completely understand what he wrote and what exactly what it does...
            </div>
            <img src={TS} className='home-TS' />
            <img src={TScode} className='home-TScode' />
            <img src={Sample} className='home-sample' />
            <img src={Term} className='home-term' />
            <img src={ReactPhoto} className='home-reactphoto' />
        </div>


    );
}
export default home;