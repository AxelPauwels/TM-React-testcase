import React from 'react';
import ReactDOM, {render} from 'react-dom';

import NewsReader from './containers/les4oef_container_news_reader';

const App = function () {
    return (
        <div>
            <NewsReader/>
        </div>
    );
};

render(
    <App/>,
    document.querySelector("#container")
);