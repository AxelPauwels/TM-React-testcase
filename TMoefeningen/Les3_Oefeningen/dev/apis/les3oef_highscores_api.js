class HighscoresApi {

    constructor() {
        this.scores = [];

        if (localStorage.scores) {
            this.scores = JSON.parse(localStorage.scores);
        }
        else {
            localStorage.scores = JSON.stringify(this.scores);
        }
    }

    count() {
        return this.scores.length;
    }

    all() {
        return this.scores;
    }

    add(name, score) {
        let player = {player: name, score: score};

        if (this.scores.length == 0) {
            this.scores.push(player);
        }
        else {
            for (let index in this.scores) {

                if (this.scores[index].score < score) {
                    this.scores.splice(index, 0, player);
                    break;
                }

                if (index == (this.scores.length - 1)) {
                    this.scores.push(player);
                }
            }
        }
        localStorage.scores = JSON.stringify(this.scores);
    }
}

export default HighscoresApi;
