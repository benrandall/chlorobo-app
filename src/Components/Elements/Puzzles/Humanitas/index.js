import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import '../index.css';

const Humanitas = () => {
    let title = "Humanitas";
    let dispatch = useDispatch();
    return (
        // <div className="castitas-container">
        //     This is the container for Humanitas.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(7));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

export default Humanitas

