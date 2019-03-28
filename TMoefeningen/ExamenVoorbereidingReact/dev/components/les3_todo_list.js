import React, {Component} from "react";
import InputForm from "./les3_todo_input_form";
import TodoItems from "./les3_todo_items";

class TodoList extends Component {
    constructor(props) {
        super(props);

        // const items = [{text: "First tod item", date: "16/06/2017", key: "1"},
        //     {text: "Second tod item", date: "09/10/2017", key: "2"}];
        let items = [];

        if (localStorage.todoitems) {
            items = JSON.parse(localStorage.todoitems);
        }

        // via ES6 syntax is deze state als "items:items"
        this.state = {items};
    }

    addItem(itemText) {
        let items = this.state.items;

        const today = new Date();
        const shortDate = today.getDate() +
            "/" + (today.getMonth() + 1) +
            "/" + today.getFullYear();
        const vandaag = Date.now();

        items.push(
            {
                text: itemText,
                date: shortDate,
                key: vandaag
            }
        );
        this.setState({items});
        localStorage.todoitems = JSON.stringify(items);
    }

    deleteItem(item) {
        let items = this.state.items;

        let itemIndex = items.findIndex((element, index) => element.key === item.key);
        items.splice(itemIndex, 1);

        this.setState({items});
        localStorage.todoitems = JSON.stringify(items);
    }

    render() {
        return (
            <div className="todoListMain">
                <InputForm onSubmitHandler={this.addItem.bind(this)}/>
                <TodoItems entries={this.state.items} onClickHandler={this.deleteItem.bind(this)}/>
            </div>
        );
    }
}

export default TodoList;