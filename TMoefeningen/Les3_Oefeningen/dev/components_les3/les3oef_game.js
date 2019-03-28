import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CapitalsApi from '../apis/les3oef_capitals_api';
import HighscoresApi from '../apis/les3oef_highscores_api';
import InputForm from '../components_les3/les3oef_input_form';

const Vraag = (props) => {
    return (
        <p>{(props.huidigeVraagIndex + 1)}. Wich is the capital of {props.huidigeVraag.country}?</p>
    );
};

const Antwoorden = (props) => {
    let antwoorden = [];
    props.huidigeMogelijkeAntwoorden.map(
        (antwoord, index) => {
            antwoorden.push(
                <button type="button" style={{width: "100%", textAlign: "left"}}
                        onClick={(event) => props.onClickAntwoord(event, antwoord)}
                        key={`key${antwoord}`}
                        id={`id${antwoord}`}
                        value={antwoord}>{antwoord}</button>
            );
        }
    );
    return (
        <div className="highscores">
            {antwoorden}
        </div>
    );
};

class Game extends Component {

    constructor(props) {
        super(props);
        let capitalsApi = new CapitalsApi();

        let huidigeVraagIndex = 0;
        let totaalAantalVragen = capitalsApi.count();
        let huidigeVraag = capitalsApi.get(huidigeVraagIndex);
        let huidigeJuistAntwoord = huidigeVraag.capital;
        let huidigeMogelijkeAntwoorden = capitalsApi.getAnswers(huidigeVraagIndex);
        let score = 0;
        let eindeSpel = false;

        this.state = ({
            huidigeVraagIndex,
            totaalAantalVragen,
            huidigeVraag,
            huidigeJuistAntwoord,
            huidigeMogelijkeAntwoorden,
            score,
            eindeSpel
        });
    }

    controleerAntwoord(event, antwoord) {
        // event.target.value === antwoord (beiden zijn hetzelfde, bv "tokyo")

        if (antwoord === this.state.huidigeJuistAntwoord) {
            this.setState({score: (this.state.score + 1)});
        }

        if (this.state.huidigeVraagIndex < this.state.totaalAantalVragen - 1) {
            this.maakVolgendeVraag();
        }
        else {
            this.setState({eindeSpel: true});
        }
    };

    maakVolgendeVraag() {
        let capitalsApi = new CapitalsApi();

        let huidigeVraagIndex = this.state.huidigeVraagIndex + 1;
        let huidigeVraag = capitalsApi.get(huidigeVraagIndex);
        let huidigeJuistAntwoord = huidigeVraag.capital;
        let huidigeMogelijkeAntwoorden = capitalsApi.getAnswers(huidigeVraagIndex);

        this.setState({huidigeVraagIndex, huidigeVraag, huidigeJuistAntwoord, huidigeMogelijkeAntwoorden});
    }

    addHighscore(naam) {
        let highscores = new HighscoresApi();
        highscores.add(naam, this.state.score);
        this.props.history.push('/highscores');
    }

    render() {
        if (this.state.eindeSpel) {
            return (
                <div>
                    <h2>Game</h2>
                    <p>The end! Score: {this.state.score}/{this.state.totaalAantalVragen}</p>
                    <InputForm onSubmitHandler={this.addHighscore.bind(this)} caption="Submit"/>
                    <Link to='/'> Back</Link>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Game</h2>
                    <Vraag huidigeVraagIndex={this.state.huidigeVraagIndex} huidigeVraag={this.state.huidigeVraag}/>
                    <Antwoorden huidigeMogelijkeAntwoorden={this.state.huidigeMogelijkeAntwoorden}
                                onClickAntwoord={this.controleerAntwoord.bind(this)}/>
                    <Link to="/">Stop playing</Link>
                </div>
            );
        }
    }
}

export default Game;