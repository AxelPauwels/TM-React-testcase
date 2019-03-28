import React from 'react';
import {Link} from 'react-router-dom';
import HighscoresApi from '../apis/les3oef_highscores_api';

const Highscores = (props) => {
    let highscoresApi = new HighscoresApi();
    let output = [];
    highscoresApi.all().map(
        (score, index) => {
            output.push(<p key={`key${index}`} id={`id${index}`}>{(index + 1)}. {score.player} - {score.score}</p>)
        }
    );

    return (
        <div>
            <h2>Highscores</h2>
            {output}
            <Link to="/les3b">Back to menu</Link>
        </div>
    );

};

export default Highscores;