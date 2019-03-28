import React from 'react';

import HelloWorld from './les1oef_hello_world';
import Letter from './les1oef_letter';
import Card from './les1oef_color_card';
import ProgressBar from './les1oef_progress_bar';
import MultiplicationTable from './les1oef_multiplication_table';
import Rater from './les1oef_rater';

const MainLes1oef = (props) => {
    return(
        <div>
            <HelloWorld phrase="ES6"/>
            <HelloWorld phrase="JSX"/>

            <hr/>

            <Letter bgcolor="#58B3FF">A</Letter>
            <Letter bgcolor="#FF605F">E</Letter>
            <Letter bgcolor="#FFD52E">I</Letter>
            <Letter bgcolor="#49DD8E">O</Letter>
            <Letter bgcolor="#AE99FF">U</Letter>

            <hr/>

            <Card color="#ff2233"/>
            <br/>
            <Card color="#998877"/>

            <hr/>

            <ProgressBar percentage="75" color="#ce4b99"/>
            <ProgressBar percentage="15" color="#ce1b29"/>
            <ProgressBar percentage="65" color="#125b69"/>

            <hr/>

            <MultiplicationTable number="9"/>
            <br/>
            <MultiplicationTable number="3"/>

            <hr/>

            <Rater rating="7" max="8"/>
            <Rater rating="1" max="5"/>
            <Rater rating="3" max="3"/>
        </div>
    );
};

export default MainLes1oef;
