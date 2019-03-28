import React, {Component} from 'react';
import NewsReader from '../components/les4oef_news_reader';
import NytApi from '../apis/les4oef_nyt_api';

class NewsReaderContainer extends Component {
    constructor(props) {
        super(props);
        const api = new NytApi();
        const sections = api.getSections();
        const section = sections[0];
        this.state = {posts: [], sections, section};
    }

    componentDidMount() {
        this.getPosts(this.state.section);
    }

    onRetrieve(section) {
        this.setState({section});
        this.getPosts(section);
    }

    getPosts(section) {
        const api = new NytApi();
        const promise = api.getPosts(section);

        promise.then(function (result) {
                api.setImgUrls(result.data.results);
                this.setState({posts: result.data.results});
            }.bind(this),
            function (error) {
                console.log('Something went wrong with the nyt api.')
            }.bind(this)
        );
    }

    render() {
        return (
            <NewsReader onRetrieveHandler={this.onRetrieve.bind(this)} posts={this.state.posts}
                        sections={this.state.sections}/>
        );
    }
}

export default NewsReaderContainer;
