import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter} from 'react-router-dom';

import MainMenu from './components_les3/les3oef_main_menu';
import Game from './components_les3/les3oef_game';
import HighScores from './components_les3/les3oef_highscores';
import Info from './components_les3/les3oef_info';

const Main = () => (
    <div className="content">
        <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route path='/game' component={Game}/>
            <Route path='/highscores' component={HighScores}/>
            <Route path='/info' component={Info}/>
        </Switch>
    </div>
);

const App = () => {
    return (
        <div>
            <Main/>
        </div>
    );
};

render(
    <HashRouter>
        <App/>
    </HashRouter>
    ,
    document.querySelector("#container")
);