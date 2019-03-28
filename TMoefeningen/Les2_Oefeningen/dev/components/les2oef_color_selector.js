import React, {Component} from 'react';

const Label = (props) => {
    const labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: props.labelFontWeight,
        padding: 13,
        margin: 5,
        textAlign: "center",
        display: "inline-block",
        width: parseInt(props.labelWidth)
    };

    return (
        <label style={labelStyle}>
            {props.labelText}
        </label>
    );
};

const Button = (props) => {
    const buttonStyle = {
        backgroundColor: "#DDD",
        height: 50,
        width: 50,
        borderRadius: 5,
        color: "#FFF",
        fontSize: 26,
        border: "none"
    };

    return (
        <button style={buttonStyle}
                onClick={(event) => props.onClickButton(event, props.bewerking, props.kleur)}>{props.bewerking}</button>
    );
};

const Row = (props) => {
    return (
        <div>
            <Label {...props} />
            <Button {...props} bewerking="-"/>
            <Label {...props} labelText={props.value}/>
            <Button {...props} bewerking="+"/>
        </div>
    );
};

const Square = (props) => {
    const squareStyle = {backgroundColor: props.color};
    return (
        <div style={squareStyle}></div>
    );
};

const Card = (props) => {
    const cardStyle = {
        display: "inline-block",
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: props.bgColor,
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
        <span style={cardStyle}>
            <Square {...props}/>
            <Label {...props}/>
        </span>
    );
};

class ColorSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {redValue: 0, greenValue: 0, blueValue: 0, cardColorHex: "#000000"};
        this.onClick_handler = this.onClick_function.bind(this);

        this.correctValueIfNeeded_handler = this.correctValueIfNeeded_function.bind(this);
        this.saveCardColorHex_handler = this.saveCardColorHex_function.bind(this);
        this.convertRgbToHex_handler = this.convertRgbToHex_function.bind(this);
    }

    onClick_function(event, bewerking, kleur) {
        // indien ctrl én shift verhogen met 100 | indien ctrl of shift ingedrukt, verhogen met 10
        let aantal = 1;
        if (event.ctrlKey && event.shiftKey) {
            aantal = 100;
        }
        else if (event.ctrlKey || event.shiftKey) {
            aantal = 10;
        }

        // object maken om te updaten met setState()-methode
        // eval()-functie gebruiken om string operatoren te laten werken als echte operatoren
        let updateObject = {};
        let value;
        switch (kleur) {
            case "r":
                value = this.correctValueIfNeeded_handler(eval(this.state.redValue + bewerking + aantal));
                updateObject["redValue"] = value;
                break;
            case "g":
                value = this.correctValueIfNeeded_handler(eval(this.state.greenValue + bewerking + aantal));
                updateObject["greenValue"] = value;
                break;
            case "b":
                value = this.correctValueIfNeeded_handler(eval(this.state.blueValue + bewerking + aantal));
                updateObject["blueValue"] = value;
                break;
        }
        this.setState(updateObject);
        // na verandering van een rgb-state, omzetten naar hex en die hex-state updaten
        this.saveCardColorHex_handler(this.state.redValue, this.state.greenValue, this.state.blueValue);
    }

    correctValueIfNeeded_function(value) {
        if (value > 255) {
            value = 255;
        }
        else if (value < 0) {
            value = 0;
        }
        return value;
    }

    saveCardColorHex_function(r, g, b) {
        let updateObject = {};
        updateObject["cardColorHex"] = "#" + this.convertRgbToHex_handler(r) + this.convertRgbToHex_handler(g) + this.convertRgbToHex_handler(b);
        this.setState(updateObject);
    }

    convertRgbToHex_function(color) {
        let hex = color.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    render() {
        return (
            <div>
                <Row kleur="r" labelText="Red:" labelWidth="50" labelFontWeight="normal" value={this.state.redValue}
                     onClickButton={this.onClick_handler}/>
                <Row kleur="g" labelText="Green:" labelWidth="50" labelFontWeight="normal" value={this.state.greenValue}
                     onClickButton={this.onClick_handler}/>
                <Row kleur="b" labelText="Blue:" labelWidth="50" labelFontWeight="normal" value={this.state.blueValue}
                     onClickButton={this.onClick_handler}/>
                <Card labelText={this.state.cardColorHex} labelWidth="50" labelFontWeight="bold"
                      bgColor={this.state.cardColorHex}/>
            </div>

        );
    }
}

export default ColorSelector;
