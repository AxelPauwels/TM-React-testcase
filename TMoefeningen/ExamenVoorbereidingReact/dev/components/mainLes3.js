import React from 'react';
import {render} from 'react-dom';
import {Switch, Route, HashRouter, NavLink} from 'react-router-dom';

import Stuff from './les3_stuff';
import Class from './les3_class';
import TodoList from './les3_todo_list';

// props.match.path == "les3"

const Header = (props) => (
    <ul className="header">
        <li><NavLink to={`${props.match.path}/stuff`} activeClassName="active">Stuff</NavLink></li>
        <li><NavLink to={`${props.match.path}/class`} activeClassName="active">Class</NavLink></li>
        <li><NavLink to={`${props.match.path}/todo`} activeClassName="active">ToDo</NavLink></li>
    </ul>
);

const Main = (props) => (
    <div className="content">
        <Switch>
            <Route path={`${props.match.path}/stuff`} component={Stuff}/>
            <Route path={`${props.match.path}/class`} component={Class}/>
            <Route path={`${props.match.path}/todo`} component={TodoList}/>
        </Switch>
    </div>
);

const MainLes3 = (props) => {
    return (
        <div>
            <Header {...props}/>
            <Main {...props}/>
        </div>
    );
};

export default MainLes3;
