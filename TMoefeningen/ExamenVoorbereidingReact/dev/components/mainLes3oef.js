import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

import MainMenu from "./les3oef_main_menu";
import Game from "./les3oef_game";
import Info from "./les3oef_info";
import Highscores from "./les3oef_highscores";

// props.match.path == "les3b"

const Main = (props) => (
    <div className="gameContent">
        <Switch>
            <Route exact path={`${props.match.path}`} component={MainMenu}/>
            <Route path={`${props.match.path}/game`} component={Game}/>
            <Route path={`${props.match.path}/highscores`} component={Highscores}/>
            <Route path={`${props.match.path}/info`} component={Info}/>
        </Switch>
    </div>
);

const MainLes3oef = (props) => {
    return (
        <div>
            <Main {...props}/>
        </div>
    );
};

export default MainLes3oef;
