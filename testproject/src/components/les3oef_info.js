import React from 'react';
import {Link} from 'react-router-dom';

const Info = (props) => {
    return (
        <div>
            <h2>Info</h2>
            <p>Have fun</p>
            <Link to="/les3b">Back to menu</Link>
        </div>
    );
};

export default Info;
