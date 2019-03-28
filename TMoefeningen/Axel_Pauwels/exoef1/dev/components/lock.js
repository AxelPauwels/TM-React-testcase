import React, {Component} from 'react';

class Digit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                <img src={"./images/number-" + this.props.cijferRandom + ".png"}
                     onClick={(event) => this.props.onImageClickHandler(event, this.props.digit, this.props.cijferRandom)}/>
            </span>
        );
    }
}

class Lock extends Component {
    constructor(props) {
        super(props);

        let cijfers = props.code.split("");
        const cijfer1juist = parseInt(cijfers[0]);
        const cijfer2juist = parseInt(cijfers[1]);
        const cijfer3juist = parseInt(cijfers[2]);
        console.log("JUIST");
        console.log(cijfer1juist);
        console.log(cijfer2juist);
        console.log(cijfer3juist);

        // Return a random number between 1 and 10:
        const cijfer1random = Math.floor((Math.random() * 9) + 1);
        const cijfer2random = Math.floor((Math.random() * 9) + 1);
        const cijfer3random = Math.floor((Math.random() * 9) + 1);
        const slotOpen = false;

        this.state = ({cijfer1juist, cijfer2juist, cijfer3juist, cijfer1random, cijfer2random, cijfer3random,slotOpen});
        this.onImageClick_handler = this.onImageClick_function.bind(this);
        this.correctValueIfNeeded_handler = this.correctValueIfNeeded_function.bind(this);
        this.controleerCombinatie_handler = this.controleerCombinatie_function.bind(this);
    }

    onImageClick_function(event, digit, cijfer) {
        let value;
        let updateObject = {};

        switch (digit) {
            case "1":
                value = this.correctValueIfNeeded_handler(cijfer, event);
                updateObject["cijfer1random"] = value;
                break;
            case "2":
                value = this.correctValueIfNeeded_handler(cijfer,event);
                updateObject["cijfer2random"] = value;
                break;
            case "3":
                value = this.correctValueIfNeeded_handler(cijfer,event);
                updateObject["cijfer3random"] = value;
                break;
        }
        this.controleerCombinatie_handler(updateObject);
        this.setState(updateObject);
    }

    correctValueIfNeeded_function(value, event) {
        if (event.altKey) {
            if (value === 1) {
                return 9;
            }
            return value - 1;
        }
        else {
            if (value === 9) {
                return 1;
            }
            return value + 1;
        }
    }
    
    controleerCombinatie_function(updateObject){
        if(this.state.cijfer1juist === this.state.cijfer1random && this.state.cijfer2juist === this.state.cijfer2random  && this.state.cijfer3juist === this.state.cijfer3random ){
            this.setState({slotOpen : true,updateObject});
            console.log('juist, slot open');
        }
    }

    render() {
        let border = "#333 2px dotted";
        if(this.state.slotOpen){
            border = "#333 2px solid";
        }

        var backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            width: 320,
            border: border,
            borderRadius: 10,
            textAlign: "left"
        };

        return (
            <div style={backgroundStyle}>
                <Digit cijferRandom={this.state.cijfer1random} cijfer={this.state.cijfer1random}
                       onImageClickHandler={this.onImageClick_handler} digit="1"/>
                <Digit cijferRandom={this.state.cijfer2random} onImageClickHandler={this.onImageClick_handler}
                       digit="2"/>
                <Digit cijferRandom={this.state.cijfer3random} onImageClickHandler={this.onImageClick_handler}
                       digit="3"/>
            </div>
        );
    }
}

export default Lock;