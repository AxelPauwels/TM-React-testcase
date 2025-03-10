import React, {Component} from 'react';
import WeatherList from '../components/les4_weather_list';
import WeatherApi from '../apis/les4_weather_api';

class WeatherListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {items: [], city: "Geel"};
    }

    componentDidMount() {
        let api = new WeatherApi();
        const promise = api.getWeatherSlow(this.state.city);

        promise.then(function (result) {
                this.setState({items: result.data.list});
            }.bind(this),
            function (error) {
                console.log('Something went wrong with the weather api.')
            }.bind(this)
        );
    }

    render() {
        return (
            <WeatherList items={this.state.items} city={this.state.city}/>
        );
    }
}

export default WeatherListContainer;
