import React, {Component} from "react";

class InputForm extends Component {
    constructor(props) {
        super(props);

    }

    submitItem(event) {
        //deze triggert de functie in "addHighscore(naam)" game.js
        this.props.onSubmitHandler(this.inputElement.value);
        this.inputElement.value = "";
        event.preventDefault();
    }

    render() {
        return (
            <div className="highscores">
                <form onSubmit={this.submitItem.bind(this)}>
                    <input ref={(a) => this.inputElement = a}
                           placeholder="enter your name"/>
                    <button type="submit">{this.props.caption}</button>
                </form>
            </div>
        );
    }
}

export default InputForm;
