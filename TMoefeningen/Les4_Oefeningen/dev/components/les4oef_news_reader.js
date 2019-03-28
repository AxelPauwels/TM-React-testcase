import React from 'react';
import NewsFilter from './les4oef_news_filter';
import NewsList from './les4oef_news_list';
import PropTypes from 'prop-types';

const NewsReader = ({posts, sections, onRetrieveHandler}) => {
    return (
        <div>
            <h3 className="text-center">React News Reader</h3>
            <div>
                <NewsFilter onRetrieveHandler={onRetrieveHandler} sections={sections}/>
            </div>
            <div>
                <NewsList posts={posts}/>
            </div>
        </div>
    );
};

NewsReader.propTypes = {
    posts: PropTypes.array.isRequired,
    sections: PropTypes.array.isRequired
};

export default NewsReader;
