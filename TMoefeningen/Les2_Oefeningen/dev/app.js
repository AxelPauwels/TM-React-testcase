import React from 'react';
import ReactDOM from 'react-dom';

import SimpleRepeater from './components/les2oef_simple_repeater';
import Calculator from './components/les2oef_calculator';
import RandomColors from './components/les2oef_random_colors';
import BmiCalculator from './components/les2oef_bmi_calculator';
import ColorSelector from './components/les2oef_color_selector';

const App = function () {
    return (
        <div>
            <SimpleRepeater/>
            <hr/>
            <Calculator/>
            <hr/>
            <RandomColors/>
            <hr/>
            <BmiCalculator/>
            <hr/>
            <ColorSelector/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
);