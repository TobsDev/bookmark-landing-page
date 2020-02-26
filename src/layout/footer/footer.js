import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div id="footer" className="footer">
                <div className="footer__logo">Logo here</div>
                <div className="footer__link">Link 1</div>
                <div className="footer__link">Link 2</div>
                <div className="footer__link">Link 3</div>
                <div className="footer__socialLink">Facebook</div>
                <div className="footer__socialLink">Twitter</div>
            </div>
        )
    }
    
}

export default Footer