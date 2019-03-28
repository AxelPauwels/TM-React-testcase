import React from 'react';
import ReactDOM , {render}from 'react-dom';
import WeatherListContainer from './containers/les4_container_weather_list';

const App = function () {
    return (
        <div>
            <WeatherListContainer />
        </div>
    );
};

render(
    <App />,
    document.querySelector("#container")
);