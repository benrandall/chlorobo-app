import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import '../index.css';

const Patientia = () => {
    let title = "Patientia";
    let dispatch = useDispatch();
    return (
        // <div className="castitas-container">
        //     This is the container for Patientia.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                
                <PatientiaVideo/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(4));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

const PatientiaVideo = () => { 

    return (
        <div className="patientia-player">
            {/* <iframe src="https://player.vimeo.com/video/529079042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="patientia-player" width="1100" height="600" frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen title="Patientia">
            </iframe> */}
            <ReactPlayer class="patientia-player" url="https://player.vimeo.com/video/529079042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="45vh" width="60vw" controls={false} playing={true} loop={false}/>
        </div>
    )
}

export default Patientia


