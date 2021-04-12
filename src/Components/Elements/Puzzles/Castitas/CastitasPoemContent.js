import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


const CastitasPoemContent = () => {
	let dispatch = useDispatch();
	let playSound = (character, charIdx) => {
        if (character !== ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={50} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>A humming shimmer, <Typist.Delay ms={500} />the beaming lights.</p>
                <Typist.Delay ms={500} />
                <p>It was cold and dark,<Typist.Delay ms={500} /> now it’s crystal white.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Loading, <Typist.Delay ms={500} />loading,<Typist.Delay ms={500} /> data with thoughts.</p>
                <Typist.Delay ms={500} />
                <p>In a moment's notice <Typist.Delay ms={200} />I ceased to be lost.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>There was nothing, <Typist.Delay ms={500} />nothing in sight.</p>
                <Typist.Delay ms={500} />
                <p>Now it’s shining, <Typist.Delay ms={500} />filled with crystal white.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Hard rock metal,<Typist.Delay ms={500} /> now filled with heat.</p>
                <Typist.Delay ms={500} />
                <p>Electric currents now shine and beat.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Hmm.<Typist.Delay ms={300} />.<Typist.Delay ms={300} />.<Typist.Delay ms={700} /> Is that me humming to that melodic tune?</p>
                <Typist.Delay ms={500} />
                <p>Should I follow the current?<Typist.Delay ms={500} /> Should I be there soon?</p>
                <br/>
                <Typist.Delay ms={2000} />
                <p>✿</p>
        	</Typist>
            <div className="ContinueButton continue-button-fade">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
		</div>
    )
}

export default CastitasPoemContent;