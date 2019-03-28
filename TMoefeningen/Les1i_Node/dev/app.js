import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello_world';
import Letter from './components/letter';
import Card from './components/color_card';

const App = function () {
    return (
        <div>
            {/*<HelloWorld phrase="ES6"/>*/}
            {/*<HelloWorld phrase="JSX"/>*/}
            {/*<Letter bgcolor="#58B3FF">A</Letter>*/}
            {/*<Letter bgcolor="#FF605F">E</Letter>*/}
            {/*<Letter bgcolor="#FFD52E">I</Letter>*/}
            {/*<Letter bgcolor="#49DD8E">O</Letter>*/}
            {/*<Letter bgcolor="#AE99FF">U</Letter>*/}

            <Card color="#ff2233"/>
            <br/>
            <Card color="#998877"/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
);