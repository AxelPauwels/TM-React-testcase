import React from 'react';

const Label = (props) => {
    const labelStyle = {padding: 5, textAlign: "center", fontWeight: "bold"};

    const textArray = ["disaster", "insufficient", "sufficient", "average", "good", "very good", "excellent"];
    let text = textArray[0];

    const rating = (props.rating / props.max).toFixed(1); //is bv 0.3, 0.8, ...

    switch (rating * 10) {
        case 1:
        case 2:
            text = textArray[1];
            break;
        case 3:
        case 4:
            text = textArray[2];
            break;
        case 5:
            text = textArray[3];
            break;
        case 6:
        case 7:
            text = textArray[4];
            break;
        case 8:
        case 9:
            text = textArray[5];
            break;
        default:
            text = textArray[6];
            break;
    }

    return (
        <p style={labelStyle}>{text}</p>
    );
};

const Stars = (props) => {
    const imgStyle = {
        height: 25,
        width: 25
    };

    const pStyle = {
        padding: 5,
        textAlign: "center"
    };

    let stars = [];
    const aantalLegeSterren = props.max - props.rating;

    for (let i = 0; i < props.rating; i++) {
        stars.push(
            <img id={"StarOn" + (i+1)} key={"StarOn" + (i+1)} src="./images/StarOn.png" style={imgStyle}/>
        );
    }

    for (let i = 0; i < aantalLegeSterren; i++) {
        stars.push(
            <img id={"StarOff" + (i+1)} key={"StarOff" + (i+1)} src="./images/StarOff.png" style={imgStyle}/>
        );
    }

    return (
        <p style={pStyle}>
            {stars}
        </p>
    );
};

const Rater = (props) => {
    const divStyle = {
        width: 250,
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    const pStyle = {
        textAlign: "center"
    };

    return (
        <div style={divStyle}>
            {/*<Label rating={props.rating} max={props.max}/>*/}
            {/*<Stars style={pStyle} rating={props.rating} max={props.max}/>*/}
            <Label {...props}/>
            <Stars style={pStyle} {...props}/>
        </div>
    );
};

export default Rater;