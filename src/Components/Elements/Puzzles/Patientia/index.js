import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import './index.css';
import PatientiaSong from '../../../Elements/Sounds/Patientia-video.mp3'

const Patientia = () => {
    let dispatch = useDispatch();

    return (
        // <div className="castitas-container">
        //     This is the container for Patientia.
        // </div>
        <div className="main-content-holder">
            <div className="main-puzzle-holder">
                
                <PatientiaVideo/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(4));}}> click to solve this puzzle</Button>
                
            </div>
        </div>
    )
}

const PatientiaVideo = () => {
    let dispatch = useDispatch();
    let onPlayFunction = () => { 
        var audio = new Audio(PatientiaSong);
        audio.play();
    }
    let onEndedFunction = () => { 
        alert('ended!');
        dispatch(dispatch(SetSolved(4)));
    }
    return (
        <div className="patientia-player-div">
            <ReactPlayer className="patientia-player" url="https://player.vimeo.com/video/529079042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100%" width="100%" onPlay={onPlayFunction} onEnded={onEndedFunction} controls={false} muted={true} playing={true} loop={false}/>      
        </div>
    )
}


export default Patientia


