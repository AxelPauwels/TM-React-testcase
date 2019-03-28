import React, {Component} from "react";

const TodoItems = (props) => {
    const output = [];
    props.entries.map((item) => {
        output.push(
            <li key={item.key} onClick={(event) => props.onClickHandler(item)}>
                {item.text}<br/>
                <div className="smallerText">
                    {item.date}
                </div>
            </li>
        )
    });

    return (
        <ul className="theList">
            {output}
        </ul>
    )
};

export default TodoItems;
