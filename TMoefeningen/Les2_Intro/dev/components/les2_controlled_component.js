import React, {Component} from 'react';

class ControlledComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {text: '', text2: '***'};
        this.onInputChange_handler = this.onInputChange_function.bind(this);
    }

    onInputChange_function(event) {
        this.setState({
            text: event.target.value,
            text2: "text2 = " + event.target.value,
        });
    }

    componentDidUpdate(currentProps, currentState) {
        // console.log(this.state.text);
        // console.log(this.state.text2);
    }

    render() {
        return (
            <div>
                <input placeholder="typ hier je naam"
                       value={this.state.text}
                       onChange={(event) => this.onInputChange_handler(event)}/>
                <p>ingegeven input = {this.state.text}</p>
            </div>
        );
    }
}

export default ControlledComponent;