import React, { Component } from 'react';
import BartenderApi from '../apis/bartender_api';
import {Switch, Route, HashRouter, NavLink, Link} from 'react-router-dom';
import Drankjes from "./drankjes";

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {soorten: []};
    }

    componentDidMount() {
        let api = new BartenderApi();
        const promise = api.getSoorten();

        promise.then(function (result) {
                this.setState({soorten: result.data});
                console.log(result.data);
            }.bind(this),
            function (error) {
                console.log('Something went wrong with the BartenderApi.');
                console.log(error);
            }.bind(this)
        );
    }


    render() {
        let soorten = [];
        this.state.soorten.map((soort,index)=>{
            soorten.push(<li key={soort+index} id={soort}><NavLink to={`soort/${soort.naam}`} className="active">{soort.naam}</NavLink></li>);
        });

        return(
            <div>
                <h2>Bartender</h2>
                <ul className="menu">
                    {soorten}
                </ul>
            </div>

        );
    }
}

export default MainMenu;