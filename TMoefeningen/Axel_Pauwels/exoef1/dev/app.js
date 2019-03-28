import React from 'react';
import ReactDOM from 'react-dom';

import Lock from './components/lock';

const App = function () {
    return(
    <div>
        <Lock code="765"/>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#container")
);