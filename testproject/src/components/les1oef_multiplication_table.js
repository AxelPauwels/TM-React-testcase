import React from 'react';

const Header = (props) => {
    const headerStyle = {
        fontSize: 50,
        color: "#e65100",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ff9800"
    };

    const numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const numberAsString = numberStrings[props.number];

    return (
        <thead>
        <tr>
            <th style={headerStyle}>{numberAsString}</th>
        </tr>
        </thead>
    );
};

const Rows = (props) => {
    const cellStyle = {
        fontSize: 20,
        color: "#455a64"
    };

    let rows = [];

    for (let i = 0; i < props.factor1; i++) {
        rows.push(
            <tr key={i} className="row">
                <td key={i} style={cellStyle}>{(i + 1)} x {props.factor2} = {(i + 1) * props.factor2}</td>
            </tr>
        );
    }

    return (
        <tbody>
        {rows}
        </tbody>
    );
};

const MultiplicationTable = (props) => {
    const tableStyle = {
        fontFamily: "Comic Sans MS",
        textAlign: "center",
        width: 200,
        padding: 0,
        borderRadius: 20,
        backgroundColor: "#ffe0b2",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
        <table style={tableStyle}>
            {/*<Header number={props.number}/>*/}
            <Header {...props}/>
            <Rows factor1="10" factor2={props.number}/>
        </table>
    );
};
export default MultiplicationTable;