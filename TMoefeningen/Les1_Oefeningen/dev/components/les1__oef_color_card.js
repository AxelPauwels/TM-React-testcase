import React from 'react';

const Square = (props) => {
    const squareStyle = {backgroundColor: props.color};
    return (
        <div style={squareStyle}></div>
    );
};

const Label = (props) => {
    let labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
    };
    return (
        <p style={labelStyle}>{props.color}</p>
    );
};

const Card = (props) => {
    let cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: props.color,
        filter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
        <div style={cardStyle}>
            <Square color={props.color}/>
            <Label color={props.color}/>
        </div>
    );
};
export default Card;
