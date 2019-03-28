import React, {Component} from 'react';
import WeatherItem from './les4_weather_item';
import PropTypes from 'prop-types';
import {PropagateLoader} from 'react-spinners';

const WeatherList = ({items, city}) => {
    if (items.length === 0) {
        return (
            <div className="center">
                <div className="sweet-loading">
                    <PropagateLoader
                        color={"#3399ff"}
                        size={25}
                        loading={true}
                    />
                </div>
            </div>
        )
    }

    const paddingStyle = {
        padding: 20
    };

    const output = items.map((item, i) => {
        return (
            <div key={i} className="columns large-2 medium-4">
                <WeatherItem item={item} city={city}/>
            </div>
        )
    });

    return (
        <section style={paddingStyle}>
            <div className="row">
                {output}
            </div>
        </section>
    );
};

WeatherList.propTypes = {
    items: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired
};

export default WeatherList;
