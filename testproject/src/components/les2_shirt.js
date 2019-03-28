import React from 'react';

const Display = (props) => {

    return(
        <div>
            <p>{props.color}</p>
            <p>{props.num}</p>
            <p>{props.size}</p>
        </div>
    );
};

const Label = (props) => {

    return (
        <Display {...props}/>
    );
};

const Shirt = (props) => {

    return (
        <div>
            <Label {...props}/>
        </div>
    );
};

export default Shirt;

// de "..." is de "spread operator". deze geeft alle items door van een array. in dit geval alle properties van props
