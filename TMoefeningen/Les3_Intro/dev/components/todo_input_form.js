import React, {Component} from "react";

class InputForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <form onSubmit={this.submitItem.bind(this)}>
                    <input
                        ref={(a) => this.inputElement = a}
                        placeholder="enter task"/>
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    submitItem(event) {
        //props van todo_list.js
        this.props.onSubmitHandler(this.inputElement.value);
        this.inputElement.value = "";
        this.inputElement.focus();

        event.preventDefault();
    }
}

export default InputForm;
