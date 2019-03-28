import React, {Component} from 'react';
import BartenderApi from "../apis/bartender_api";

class Drankjes extends Component {
    constructor(props) {
        super(props);
        this.state = {drankjes: []};
    }

    componentDidMount() {
        let api = new BartenderApi();
        const promise = api.getDrankjes(this.props.match.params.soort);
        promise.then(function (result) {
                this.setState({drankjes: result.data.drankjes});
                console.log(result.data.drankjes);
            }.bind(this),
            function (error) {
                console.log('Something went wrong with the BartenderApi.');
                console.log(error);
            }.bind(this)
        );
    }

    render() {
        let output = [];
        this.state.drankjes.map((drankje, index) => {
            output.push(
                <div key={`div${drankje}${index}`}>
                    <h3 key={`title${drankje}${index}`}>{drankje.naam}
                    </h3>
                    <img key={`img${drankje}${index}`} src={`./images/${drankje.icon}.jpg`}/>
                </div>
            );
        });

        return (
            <div>
                <h2>Alle {this.props.match.params.soort}</h2>
                {output}
            </div>
        );
    }
}

export default Drankjes;