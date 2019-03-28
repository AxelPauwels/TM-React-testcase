import React from 'react';
import {Link} from 'react-router-dom';

const MainMenu = (props) => {
    return(
        <div>
            <h2>Capitals of Asia</h2>
            <ul className="menu">
                <li><Link to="/game" className="active">Play Game</Link></li>
                <li><Link to="/highscores" className="active">Highscores</Link></li>
                <li><Link to="/info" className="active">Info</Link></li>
            </ul>
        </div>
    );
}

export default MainMenu;
