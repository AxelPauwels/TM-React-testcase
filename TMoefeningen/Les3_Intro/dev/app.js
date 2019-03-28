import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';
import Class from './components_les3/class';
import TodoList from './components/todo_list';

const Header = () => (
    <div>
        <h1>Simple Single Page Application</h1>
        <ul className="header">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
            <li><NavLink to="/class" activeClassName="active">Class</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/todo" activeClassName="active">ToDo</NavLink></li>
        </ul>
    </div>
);

const Main = () => (
    <div className="content">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/stuff' component={Stuff}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/class' component={Class}/>
            <Route path='/todo' component={TodoList}/>
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
        <App />
    </HashRouter>
    ,
    document.querySelector("#container")
);