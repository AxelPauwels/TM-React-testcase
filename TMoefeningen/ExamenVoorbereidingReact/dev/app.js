import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

import Home from './components/examen';
import MainLes1oef from './components/mainLes1oef';
import MainLes2 from './components/mainLes2';
import MainLes2oef from './components/mainLes2oef';
import MainLes3 from "./components/mainLes3";
import MainLes3oef from "./components/mainLes3oef";
import MainLes4 from "./components/mainLes4";
import MainLes4oef from "./components/mainLes4oef";


const Header = () => (
    <div>
        <ul className="header">
            <li><NavLink to="/" exact activeClassName="active">Info</NavLink></li>
            <li><NavLink to="/les1" activeClassName="active">Les1-oef</NavLink></li>
            <li><NavLink to="/les2" activeClassName="active">Les2</NavLink></li>
            <li><NavLink to="/les2b" activeClassName="active">Les2-oef</NavLink></li>
            <li><NavLink to="/les3" activeClassName="active">Les3</NavLink></li>
            <li><NavLink to="/les3b" activeClassName="active">Les3-oef</NavLink></li>
            <li><NavLink to="/les4" activeClassName="active">Les4</NavLink></li>
            <li><NavLink to="/les4b" activeClassName="active">Les4-oef</NavLink></li>
        </ul>
    </div>
);

const Main = () => (
    <div className="content">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/les1' component={MainLes1oef}/>
            <Route path='/les2' component={MainLes2}/>
            <Route path='/les2b' component={MainLes2oef}/>
            <Route path='/les3' component={MainLes3}/>
            <Route path='/les3b' component={MainLes3oef}/>
            <Route path='/les4' component={MainLes4}/>
            <Route path='/les4b' component={MainLes4oef}/>
        </Switch>
    </div>
);

const App = () => {
    return (
        <div>
            <Header/>
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