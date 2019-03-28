import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

const Test = () => (
    <div className="content">
        Hello World !
    </div>
);

const App = () => {
    return (
        <div>
            <Test/>
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