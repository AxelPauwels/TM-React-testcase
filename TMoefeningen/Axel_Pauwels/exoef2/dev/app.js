import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

import MainMenu from "./components/mainmenu";
import Drankjes from "./components/drankjes";

const Main = () => (
    <div className="content">
        <div className="content">
            <Switch>
                <Route exact path='/' component={MainMenu}/>
                <Route path='/soort/:soort' component={Drankjes}/>
            </Switch>
        </div>
    </div>
)

const App = () => {
    return (
        <div>
            <Main />
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