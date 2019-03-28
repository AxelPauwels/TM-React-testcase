import axios from 'axios';

const BaseUrl = "http://taiwan.thomasmore.be/pr2/koen/aa/";

class BartenderApi  {
    constructor() {
    }

    getSoorten() {
        return axios.get(BaseUrl + "soorten.php");
    }

    getDrankjes(soort) {
        return axios.get(BaseUrl + soort + ".php");
    }

}

export default BartenderApi;
