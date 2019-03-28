import React from 'react';

const Label = (props) => {
    let labelStyle = {
        fontFamily: "Verdana",
        fontSize: 25,
        fontWeight: "bold",
        fill: props.color
    };
    return (
        <text x="180" y="25" style={labelStyle}>{props.percentage} %</text>
    );
};

const BarBg = () => {
    return (
        <g fill="none" stroke="lightgrey" strokeWidth="25">
            <path strokeLinecap="round" d="M20 55 l360 0"/>
        </g>
    );
};

const Bar = (props) => {
    let length = (360 * props.percentage) / 100;
    let d = "M20 55 l" + length + " 0";
    return (
        <g fill="none" stroke={props.color} strokeWidth="25">
            <path strokeLinecap="round" d={d}/>
        </g>
    );
};

const ProgressBar = (props) => {
    let progressBarStyle = {
        height: 80,
        width: 400,
        padding: 0,
    };
    return (
        <div>
            <svg style={progressBarStyle}>
                <BarBg/>
                <Label color={props.color} percentage={props.percentage}/>
                <Bar color={props.color} percentage={props.percentage}/>
            </svg>
        </div>
    );
};
export default ProgressBar;