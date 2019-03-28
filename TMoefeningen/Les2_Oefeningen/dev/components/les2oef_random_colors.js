import React, {Component} from 'react';

const Label = (props) => {
    const labelStyle = {
        fontFamily: "Comic Sans MS",
        fontSize: 25
    };

    return (
        <span style={labelStyle}>{props.text}</span>
    );
};

const TextBox = (props) => {
    const textBoxStyle = {
        width: 50,
        fontFamily: "Comic Sans MS",
        fontSize: 25
    };

    return (
        <input type="input" id="input"
               placeholder={props.input_placeholder}
               value={props.input_value}
               onChange={(event) => props.input_onInputChange_handler(event)}
               style={textBoxStyle}/>
    );
};

const Circle = (props) => {
    const circleStyle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: props.bgColor,
        borderRadius: "50%",
        width: 100,
        height: 100,
    };

    return (
        <div style={circleStyle}>
        </div>
    );
};

const colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
    "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

const Circles = (props) => {
    let circles = [];

    for (let i = 0; i < parseInt(props.number); i++) {
        let randomIndexNumber = Math.floor((Math.random() * (colors.length - 1)) + 1);
        let randomColor = colors[randomIndexNumber];
        circles.push(<Circle key={"circle" + i} bgColor={randomColor}/>);
    }

    return (
        <div>{circles}</div>
    );
};

class RandomColors extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 5};
        this.onInputChange_handler = this.onInputChange_function.bind(this);
    }

    onInputChange_function(event) {
        this.setState({
            number: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <p>
                    <Label text="How many circles? "/>
                    <TextBox input_value={this.state.number}
                             input_onInputChange_handler={this.onInputChange_handler}/>
                </p>
                <Circles number={this.state.number}/>
            </div>
        );
    }
}

export default RandomColors;