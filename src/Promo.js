import React from 'react';
import './App.css';

function promo() {
    return (
        <div>
            <iframe
                width="650"
                height="405"
                src="https://www.youtube.com/embed/kCmV9_Y_kqs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        <h1 className='video-description'>Here you will find a short video of <br />what me and Fabien do at <i>North P&D</i></h1>
        </div>
    );
}

export default promo;