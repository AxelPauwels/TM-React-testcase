import axios from 'axios'; // npm install axios --save

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "16d84b01de394e1ea3b654e3dc56ec5d"; // van Axel via rNummer


class NytApi  {
    constructor() {
        this.sections = [ "home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world" ]; // From NYTimes
    }

    buildUrl (section) {
        return NYTBaseUrl + section + ".json?api-key=" + ApiKey
    }

    getSections() {
        return this.sections;
    }

    getPosts(section) {
        let url = this.buildUrl(section);

        return axios.get(url);
    }

    getHomePosts() {
        let url = this.buildUrl("home");

        return axios.get(url);
    }

    setImgUrls(posts) {
        console.log(posts[1]);
        posts.map(post => {
            let imgObj = post.multimedia.find(media => media.format === "superJumbo");
            post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
        });
        // hier worden die url's van de post veranderd indien er geen multimedia van dat formaat is gevonden.
        // maar die returned niks? die kan hier (in deze api) toch niks aanpassen van posts?
        // want die worden hier niet bijgehouden
    }

}

export default NytApi;
