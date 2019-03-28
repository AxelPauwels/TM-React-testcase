import React, {Component} from 'react';

const Repeater = (props) => {
    return (
        <div>
            <label htmlFor="input">Change it here:</label>
            <input type="input" id="input"
                   placeholder={props.input_placeholder}
                   value={props.input_value}
                   onChange={(event) => props.input_onInputChange_handler(event)}
                   style={{padding:10}}/>
        </div>
    );
};

class SimpleRepeater extends Component {
    constructor(props) {
        super(props);

        this.state = {text: 'Try to change me'};
        this.onInputChange_handler = this.onInputChange_function.bind(this);
    }

    onInputChange_function(event) {
        this.setState({
            text: event.target.value,
        });
    }

    render() {
        const backgroundStyle = {
            padding: 20,
            backgroundColor: "#FFC53A",
            fontFamily: "Comic Sans MS",
            fontSize: 25,
            width: 700,
            borderRadius: 10,
            textAlign: "left"
        };

        return (
            <div style={backgroundStyle}>
                <p>Is this really simple?</p>
                <p>The value is now: {this.state.text}</p>
                <Repeater input_placeholder={this.state.text}
                             input_value={this.state.text}
                             input_onInputChange_handler={this.onInputChange_handler}/>

            </div>
        );
    }
}

export default SimpleRepeater;

