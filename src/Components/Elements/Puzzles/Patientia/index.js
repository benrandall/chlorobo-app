import React from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
// import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import { GoToCompletePage } from '../puzzlePageSlice';
import './index.css';
import PatientiaSong from '../../../Elements/Sounds/Patientia-video.mp3'

const Patientia = ({puzzle, poemMode}) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        // contentClass = "main-content-holder fade";
        dispatch(SetSolved(4));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 1000);
    }
    return (
        <div className={contentClass}>
            <div className="main-puzzle-holder">          
                <PatientiaVideo handleSolved={SolvedFunction}/>
                {/* <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>        */}
            </div>
        </div>
    )
}

class PatientiaVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            audio: false,
        }
        this.onEndedFunction = this.onEndedFunction.bind(this);
        this.onPlayFunction = this.onPlayFunction.bind(this);
    }
    onPlayFunction = () => { 
        var audio = new Audio(PatientiaSong);
        audio.play();
        this.setState({
            audio:audio,
        })
    }
    onEndedFunction = () => { 
        this.props.handleSolved();
    }
    componentWillUnmount = () => {
        var audio = this.state.audio;
        audio.pause();
        audio.currentTime = 0;
    }


    render() {
        return (
            <div className="patientia-player-div">
                <ReactPlayer className="patientia-player" url="https://player.vimeo.com/video/529079042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100%" width="100%" onPlay={this.onPlayFunction} onEnded={this.onEndedFunction} controls={false} muted={true} playing={true} loop={false} />
            </div>
        )
    }
}


// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[4]

    })

}

export default connect(getPuzzleProgress)(Patientia)


