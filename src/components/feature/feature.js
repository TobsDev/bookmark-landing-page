import React from 'react';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="feature feature--active">
                <img src="" alt="" className="feature__image"/>
                <h3 className="feature__headline">Bookmark in one click</h3>
                <p className="feature__description">Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            </div>
        );
    }
    
}export default Feature