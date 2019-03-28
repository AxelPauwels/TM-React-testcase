import React from 'react';
import SimpleRepeater from './les2oef_simple_repeater';
import Calculator from './les2oef_calculator';
import RandomColors from './les2oef_random_colors';
import BmiCalculator from './les2oef_bmi_calculator';
import ColorSelector from './les2oef_color_selector';

const MainLes2oef = (props) => {
    return(
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

export default MainLes2oef;
