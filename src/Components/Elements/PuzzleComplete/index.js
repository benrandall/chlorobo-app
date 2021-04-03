import React from 'react';
import { Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import completeImage from './Complete.png';
import completeSound from '../../Elements/Sounds/chapterComplete.mp3';
import './index.css'

const PuzzleComplete = (props) => {
    let puzzle = props.puzzle;
    let dispatch = useDispatch();
    let continueButton = () => { 
        dispatch(mainMenuPage());
        // Put logic in here for little items that appear in main menu
    }
    return (
        <div className="complete-page">
            <ReactAudioPlayer src={completeSound} autoPlay />
        	<img src={completeImage} id="CompleteImage" alt="Complete" />
        	<div>
            	<p>You have completed this chapter.</p>
            </div>
            <div>
                <Button variant="light" onClick={() => { dispatch(mainMenuPage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}


export default PuzzleComplete;

