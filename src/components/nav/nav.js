import React from 'react';
import Button from '../button/button';
import close from '../../images/icon-close.svg'
import logo from '../../images/logo-bookmark.svg'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { navToggle } = this.props

        return(
            <div className={`nav nav--${!this.props.navState ? 'inactive' : ''}`}>
                <div className="nav__head">
                    <img src={logo} alt="Bookmark Logo" className="nav__logo"/>
                    <img 
                        src={close} 
                        alt="close nav" 
                        className="nav__close"
                        onClick={navToggle}
                    />
                </div>
                <ul className="nav__links">
                    {this.props.navLinks.map((navLink) => {
                        return (
                            <li className="nav__linkItem" onClick={navToggle}>
                                <a className="nav__link" href={navLink.url}>{navLink.section}</a>
                            </li>
                        );
                    })}
                </ul>
                <Button 
                    cta="Login"
                    className="nav__button"
                    onClick={navToggle}
                />
                <ul className="nav__socialLinks">
                    {this.props.socialLinks.map((socialLink) => {
                        return (
                            <li className="nav__socialItem" onClick={navToggle}>
                                <a className="nav__socialLink" href={socialLink.url}>
                                    <img 
                                        src={socialLink.iconUrl} 
                                        alt={socialLink.platform}
                                        className="nav__socialIcon"/>
                                </a>
                            </li>
                        );
                    })}
                     
                </ul>
            </div>
        );
    }
    
}

export default Nav