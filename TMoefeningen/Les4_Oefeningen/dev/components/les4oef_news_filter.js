import React, {Component} from "react";
import PropTypes from 'prop-types';

class NewsFilter extends Component {
    constructor(props) {
        super(props);
    }

    onRetrieve(event) {
        this.props.onRetrieveHandler(this.inputElement.value);
        event.preventDefault();
    }

    render() {
        // in class components de props met "this.props" aanspreken !
        const output = this.props.sections.map((section, i) => {
            return (
                <option key={section} value={section}>{section}</option>
            )
        });

        return (
            <section className="callout secondary">
                <h5 className="text-center">Filter by Category</h5>
                <form>
                    <div className="row">
                        <div className="large-6 columns">
                            <select ref={(a) => this.inputElement = a}>
                                {output}
                            </select>
                        </div>
                        <div className="medium-6 columns">
                            <a onClick={this.onRetrieve.bind(this)} className="button expanded">Retrieve</a>
                        </div>
                    </div>
                </form>
            </section>
        )
            ;
    }

}

NewsFilter.propTypes = {
    sections: PropTypes.array.isRequired
};


export default NewsFilter;
