import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

let initialRenderIsDone = false; //gewoon om een andere consolelog weer te geven indien het initialRender of updateRender is

class Counter extends Component {

    constructor(props) {
        super(props);

        console.log("-> InitialRender1 - constructor");
        console.log("   Initialize state!");

        this.onButtonClick_handler = this.onButtonClick_function.bind(this);
        this.state = {count: 0};
    }

    componentWillMount() {
        console.log("-> InitialRender2 - componentWillMount");
        console.log("   Component is about to mount!");
    }

    componentDidMount() {
        console.log("-> InitialRender4 - componentDidMount");
        console.log("   Component just mounted!");
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("-> StateChange1 - shouldComponentUpdate");
        console.log("   Should component update?");

        if (newState.count < 5) {
            console.log("   *Component should update!");
            return true;
        }
        else {
            console.log("   *Component should NOT update!");
            ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
            return false;
        }
    }

    componentWillUpdate(newProps, newState) {
        console.log("-> StateChange2 - componentWillUpdate");
        console.log("   Component is about to update!");
    }

    componentDidUpdate(currentProps, currentState) {
        console.log("-> StateChange4 - componentDidUpdate");
        console.log("   Component just updated!");
    }

    componentWillUnmount() {
        console.log("-> Unmount1 - componentWillUnmount");
        console.log("   Component is about to be removed from the DOM!");
    }

    onButtonClick_function(event) {
        let currentCount = this.state.count;

        if (event.shiftKey) {
            currentCount += 10;
        }
        else {
            currentCount += 1;
        }

        this.setState({
            count: currentCount
        });
    }

    render() {
        if (!this.initialRenderIsDone) {
            console.log("-> InitialRender3  - render");
        }
        else {
            console.log("-> StateChange3 - render");
        }
        this.initialRenderIsDone = true;
        console.log("   Component is about to be rendered!");

        const backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Number display={this.state.count}/>
                <button onClick={this.onButtonClick_handler}>
                    +
                </button>
            </div>
        );
    }
}

export default Counter;