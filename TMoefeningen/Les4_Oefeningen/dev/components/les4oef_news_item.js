import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ( { post }) => {
    const cardStyle = {
        height: 500
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-divider">
                {post.title}
            </div>

            <div className="card-section">
                <a href={post.url}><img src={post.image_url}/></a>
                <p>{post.abstract}</p>
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired
    }).isRequired
};

export default NewsItem;
