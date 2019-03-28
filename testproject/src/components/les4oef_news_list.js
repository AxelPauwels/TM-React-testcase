import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './les4oef_news_item';

const NewsList = ({ posts }) => {
    const output = posts.map ( (post, i) => {
        return (
            <div key={i} className="columns large-3 medium-6">
                <NewsItem post={post} />
            </div>
        )
    });

    return (
        <section>
            <div className="row">
                {output}
            </div>
        </section>
    );
};

NewsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            abstract: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default NewsList;
