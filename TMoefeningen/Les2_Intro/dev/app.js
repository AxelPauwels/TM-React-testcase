import React from 'react';
import ReactDOM from 'react-dom';

import Shirt from './components/les2_shirt';
import LightningCounter from './components/les2_lightning_counter';
import List from './components/les2_list';
import Counter from './components/les2_counter';
import ControlledComponent from './components/les2_controlled_component';
import LifeCycle from './components/les2_lifecycle';

const App = function () {
    return (
        <div>
            <Shirt color="steelblue" num="3.14" size="medium"/>
            <hr/>
            <LightningCounter/>
            <hr/>
            <List/>
            <hr/>
            <Counter/>
            <hr/>
            <ControlledComponent/>
            <hr/>
            <LifeCycle/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
);