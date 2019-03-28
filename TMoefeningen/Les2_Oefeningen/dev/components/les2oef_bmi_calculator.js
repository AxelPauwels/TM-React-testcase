import React, {Component} from 'react';

const Label = (props) => {
    const labelStyle = {
        fontFamily: "Verdana",
        fontSize: 20
    };

    return (
        <text style={labelStyle}>{props.soortSlider}: {props.waarde}</text>
    );
};

const Slider = (props) => {
    return (
        <input type="range"
               value={props.waarde}
               min={props.min}
               max={props.max}
               onChange={(event) => props.onChangeSlider(event, props.soortSlider)}/>
    );
};

const BmiSlider = (props) => {
    return (
        <div>
            <Label {...props} />
            <Slider {...props} />
        </div>
    );
};

class BmiCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {heightWaarde: 178, weightWaarde: 75, bmiWaarde: 23};
        this.onChange_handler = this.onChange_function.bind(this);
        this.berekenBmi_handler = this.berekenBmi_function.bind(this);
    }

    onChange_function(event, soortSlider) {
        switch (soortSlider) {
            case "Height":
                this.setState({heightWaarde: event.target.value});
                break;
            case "Weight":
                this.setState({weightWaarde: event.target.value});
                break;
        }
        this.berekenBmi_handler();
    }

    berekenBmi_function() {
        // Math.round( x * 10) / 10     -> 1 decimaal na de komma
        // Math.pow( x , 2)             -> tot de 2de macht
        let bmi = Math.round((this.state.weightWaarde / Math.pow(this.state.heightWaarde / 100, 2)) * 10) / 10;
        this.setState({bmiWaarde: bmi});
    }

    render() {
        const backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            border: "#333 2px dotted",
            width: 450,
            borderRadius: 10,
            textAlign: "left"
        };

        const labelStyle = {
            fontFamily: "Verdana",
            fontSize: 40
        };

        return (
            <div style={backgroundStyle}>
                <div style={labelStyle}>BMI Calculator</div>
                <br/>
                <BmiSlider soortSlider="Height" waarde={this.state.heightWaarde}
                           onChangeSlider={this.onChange_handler}
                           min="0" max="200"/>
                <BmiSlider soortSlider="Weight" waarde={this.state.weightWaarde}
                           onChangeSlider={this.onChange_handler}
                           min="0" max="200"/>
                <BmiSlider soortSlider="BMI" waarde={this.state.bmiWaarde}
                           onChangeSlider={this.onChange_handler}
                           min="0" max="100"/>
            </div>
        );
    }
}

export default BmiCalculator;