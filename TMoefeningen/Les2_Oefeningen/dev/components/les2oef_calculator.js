import React, {Component} from 'react';

const Label = (props) => {
    const labelStyle = {
        fontFamily: "Verdana",
        color: "#FFF",
        fontSize: 30
    };
    return (
        <p style={{minHeight: 50}}>
            <label style={labelStyle}>{props.text}</label>
        </p>
    );
};

const Button = (props) => {
    const buttonStyle = {
        fontFamily: "Verdana",
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
        backgroundColor: "#CCCCCC",
        color: "#FFF",
        borderStyle: "solid",
        borderColor: "#CCCCCC",
        borderRadius: 5,
        width: 70,
        height: 70
    };
    return (
        <button style={buttonStyle} value={props.waarde} onClick={(event) => {
            props.onClickButton(event)
        }}>{props.waarde}</button>
    );
};

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "2345"};
        this.onClickButton_handler = this.onClickButton_function.bind(this);
    }

    onClickButton_function(event) {
        let newState = '';
        if (!isNaN(event.target.value)) {
            newState = (this.state.text += event.target.value);
        }
        else {
            if (event.target.value === "C") {
                newState = this.state.text.slice(0, -1);
            }
        }
        this.setState({
            text: newState,
        });
    }

    render() {
        const backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#00ace6",
            width: 260,
            borderRadius: 10,
            textAlign: "left"
        };

        return (
            <div style={backgroundStyle}>
                <Label text={this.state.text}/>
                <div>
                    <Button waarde="7" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="8" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="9" onClickButton={this.onClickButton_handler}/>
                </div>
                <div>
                    <Button waarde="4" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="5" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="6" onClickButton={this.onClickButton_handler}/>
                </div>
                <div>
                    <Button waarde="1" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="2" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="3" onClickButton={this.onClickButton_handler}/>
                </div>
                <div>
                    <Button waarde="C" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="0" onClickButton={this.onClickButton_handler}/>
                    <Button waarde="del" onClickButton={this.onClickButton_handler}/>
                </div>
            </div>
        );
    }
}

export default Calculator;