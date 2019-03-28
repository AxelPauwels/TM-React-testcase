import React, {Component} from 'react';

const Number = (props) => {
    const textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
    };

    return (
        <div style={textStyle}>
            {props.display}
        </div>
    );
};

const MyButton = (props) => {
    return (
        <button onClick={(event) => props.onButtonClick(event, props.operator)}>
            {props.operator}
        </button>
    );
};

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};
        this.onButtonClick_handler = this.onButtonClick_function.bind(this);
        this.count_handler = this.count_function.bind(this);
    }

    onButtonClick_function(event, operator) {
        //ctrl werkt niet op mac -> oplossing zoeken
        if (event.shiftKey && event.ctrlKey) {
            this.count_handler(operator, 100);
        }
        else if (event.shiftKey || event.ctrlKey) {
            this.count_handler(operator, 10);
        }
        else {
            this.count_handler(operator, 1);
        }
    }

    count_function(operator, number) {
        let currentCount = this.state.count;
        let newCount = eval(currentCount + operator + number); //eval gebruiken om de string operator te gebruiken als operator

        if (newCount < 0) {
            newCount = 0;
        }

        this.setState({
            count: newCount
        });
    };

    render() {
        const backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Number display={this.state.count}/>
                <MyButton operator="+" onButtonClick={this.onButtonClick_handler}/>
                <MyButton operator="-" onButtonClick={this.onButtonClick_handler}/>
            </div>
        );
    }
}

export default Counter;