import React from 'react';
import {Link} from 'react-router-dom';

// props.match.path == "les3b"

const MainMenu = (props) => {
    return (
        <div>
            <h2>Capitals of Asia</h2>
            <ul className="menu">
                <li><Link to={`${props.match.path}/game`} className="active">Play Game</Link></li>
                <li><Link to={`${props.match.path}/highscores`} className="active">Highscores</Link></li>
                <li><Link to={`${props.match.path}/info`} className="active">Info</Link></li>
            </ul>
        </div>
    );
};

export default MainMenu;
