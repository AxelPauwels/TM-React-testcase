import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({post}) => {
    const newsItemStyle = {
        cardStyle : {
            height: 500
        },
        imgStyle : {
            height: 200,
            width: 300
        }
    };

    return (
        <div className="card" style={newsItemStyle.cardStyle}>
            <div className="card-divider">
                {post.title}
            </div>

            <div className="card-section">
                <a href={post.url}><img style={newsItemStyle.imgStyle} src={post.image_url}/></a>
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
