import React from 'react';
import Feature from '../feature/feature';

class Features extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div id="features" className="features">
            <h2 className="features__headline">Features</h2>
            <p className="features__copy">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access thern on the go.</p>
            <ul className="features__list">
                <li className="features__item">Simple Bookmarking</li>
                <li className="features__item">Speedy Searching</li>
                <li className="features__item">Easy Sharing</li>
            </ul>
            <Feature />
        </div>
        )
    }
}

export default Features