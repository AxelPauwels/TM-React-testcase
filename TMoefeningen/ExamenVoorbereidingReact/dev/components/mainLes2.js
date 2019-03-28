import React from 'react';
import Shirt from './les2_shirt';
import LightningCounter from './les2_lightning_counter';
import List from './les2_list';
import Counter from './les2_counter';
import ControlledComponent from './les2_controlled_component';
import LifeCycle from './les2_lifecycle';

const MainLes2 = (props) => {
    return(
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

export default MainLes2;
