// import React from 'react';
import React, {Component} from 'react';

const Label = (props) => {
    const labelStyle = {
        color: "#66FFFF",
        fontSize: 50
    };
    return (
        <h1 style={labelStyle}>{props.number}</h1>
    );
};

class LightningCounter extends Component {
    constructor(props) {
        super(props);

        // state ALLEEN aanpassen in constructor
        this.state = { strikes: 0 };
        // bind functions
        this.onTimerTick = this.onTimerTick_function.bind(this);

    }
    onTimerTick_function() {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }
    componentDidMount() {
        setInterval(this.onTimerTick, 1000);
    }

    render() {
        const divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        const textStyles = {
            emphasis: {
                fontSize: 38
            },
            small: {
                fontSize: 17,
                opacity: 0.5
            }
        };

        return (
            <div style={divStyle}>
                {/*<Label number="300"/>*/}
                <Label number={this.state.strikes}/>
                <h2>LIGHTNING STRIKES</h2>
                <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                <p style={textStyles.small}>(since you loaded this example)</p>
            </div>
        );
    }
}

export default LightningCounter;