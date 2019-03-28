import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Students from './les3_students';
import Student from './les3_student';

// props.match.path == "les3/class"

const Class = (props) => {
    return(
        <Switch>
            {/*<Route exact path='/class' component={Students}/>*/}
            {/*<Route path='/class/:studentId' component={Student}/>*/}
            <Route exact path={props.match.path} component={Students}/>
            <Route path={`${props.match.path}/:studentId`} component={Student}/>
        </Switch>
    );
};

export default Class;