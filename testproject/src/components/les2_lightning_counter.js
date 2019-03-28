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

let intervalId = 0;

class LightningCounter extends Component {
    constructor(props) {
        super(props);

        // state ALLEEN aanpassen in constructor
        this.state = {strikes: 0};
        // bind functions
        this.onTimerTick_handler = this.onTimerTick_function.bind(this);

    }

    componentDidMount() {
        intervalId = setInterval(this.onTimerTick_handler, 1000); //id opslaan om later te stoppen
    }

    onTimerTick_function() {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    // bij het klikken op een andere route, worden deze component verwijderd van de DOM, dus dan timer stoppen
    componentWillUnmount() {
        clearInterval(intervalId);
        console.log("-> Unmount1 - componentWillUnmount");
        console.log("   Component is about to be removed from the DOM!");
        console.log("   *** timer 'strikes' is stopped ***");
    }

    render() {
        // const divStyle = {
        //     width: 250,
        //     textAlign: "center",
        //     backgroundColor: "black",
        //     padding: 40,
        //     fontFamily: "sans-serif",
        //     color: "#999",
        //     borderRadius: 10
        // };

        // const textStyles = {
        //     emphasis: {
        //         fontSize: 38
        //     },
        //     small: {
        //         fontSize: 17,
        //         opacity: 0.5
        //     }
        // };

        const myStyles = {
            divStyle:{
                width: 250,
                textAlign: "center",
                backgroundColor: "black",
                padding: 40,
                fontFamily: "sans-serif",
                color: "#999",
                borderRadius: 10
            },
            emphasis: {
                fontSize: 38
            },
            small: {
                fontSize: 17,
                opacity: 0.5
            }
        };

        return (
            <div style={myStyles.divStyle}>
                <Label number={this.state.strikes}/>
                <h2>LIGHTNING STRIKES</h2>
                <h2 style={myStyles.emphasis}>WORLDWIDE</h2>
                <p style={myStyles.small}>(since you loaded this example)</p>
            </div>
        );
    }
}

export default LightningCounter;