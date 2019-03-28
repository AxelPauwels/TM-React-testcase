import React, {Component} from "react";

class InputForm extends Component {
    constructor(props) {
        super(props);

    }

    submitItem(event) {
        //props van les3_todo_list.js
        this.props.onSubmitHandler(this.inputElement.value);
        this.inputElement.value = "";
        this.inputElement.focus();

        event.preventDefault();
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
}

export default InputForm;
