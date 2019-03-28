import React from 'react';
import PropTypes from 'prop-types';


const WeatherItem = ({item, city}) => {
    const cardStyle = {
        textAlign: 'center',
        padding: 20,
        height: 280,
        backgroundColor: "#3399ff",
        filter: "drop-shadow(0px 0px 5px #888)"
    };

    const textStyle = {
        height: 50,
        color: "#FFFFFF"
    };

    const imageStyle = {
        width: 120
    };

    return (
        <div className="card" style={cardStyle}>
            <div style={textStyle}>
                {item.main.temp} °C - {item.weather[0].description}
            </div>
            <img style={imageStyle}
                 src={"http://taiwan.thomasmore.be/pr2/koen/aa/icons/" + item.weather[0].icon + ".png"}/>
            <div className="card-section" style={textStyle}>
                <p>{city} - {item.dt_txt}</p>
            </div>
        </div>
    );

};
WeatherItem.propTypes = {
    item: PropTypes.shape({
        dt_txt: PropTypes.string.isRequired,
        main: PropTypes.shape({temp: PropTypes.number.isRequired}).isRequired,
        weather: PropTypes.arrayOf(PropTypes.shape({icon: PropTypes.string})).isRequired
    }).isRequired,
    city: PropTypes.string.isRequired
};
// item = object -> PropTypes.shape
// main = object -> PropTypes.shape
// weather = array -> PropTypes.arrayOf , met vervolgens weer een object -> PropTypes.shape
export default WeatherItem;
