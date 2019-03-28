import React from 'react';

const ListArray = (props) => {
    let output = [];
    for (let i = 0; i < props.people.length; i++) {
        output.push(<li key={props.people[i].id}>{props.people[i].name}</li>);
    }

    return (
        <ul>
            {output}
        </ul>
    );
};

const ListMap = (props) => {
    const output = props.people.map ( (person) => {
        return <li key={person.id}>{person.name.toUpperCase()}</li>
    });

    return (
        <ol>
            {output}
        </ol>
    );
};

const List = function () {
    const data = [
        { "id" : 1 , "name" : "Jeff"} ,
        { "id" : 2 , "name" : "Bill"} ,
        { "id" : 3 , "name" : "Jane"} ];

    return (
        <div>
            <ListMap people={data} />
        </div>
    );
};

export default List;