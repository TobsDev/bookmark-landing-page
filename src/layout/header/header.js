import React from 'react';
import Nav from '../../components/nav/nav';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import open from '../../images/icon-hamburger.svg'
import logo from '../../images/logo-bookmark.svg'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navState: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          navState: !this.state.navState
        })
    }

    render() {
        return(
            <div id="header" className="header">
                <div className="header__items">
                    <img 
                        src={logo} 
                        alt="Bookmark Icon" 
                        className={`header__logo ${this.state.navState ? 'header--invisible' : ''}`}
                    />
                    <img 
                        src={open} 
                        alt="open nav" 
                        className={`header__open ${this.state.navState ? 'header--invisible' : ''}`}
                        onClick={this.toggleNav}
                    />
                </div>
                
                <Nav 
                    navState={this.state.navState}
                    navToggle={this.toggleNav}
                    navLinks={
                        [
                        {
                            section: 'Features',
                            url: '#features'
                        },
                        {
                            section: 'Pricing',
                            url: '#pricing'
                        },
                        {
                            section: 'Contact',
                            url: '#newsletter'
                        }
                        ]
                    }
                    socialLinks={[
                        {
                        url: facebookIcon,
                        iconUrl: facebookIcon,
                        platform: 'Facebook'
                        },
                        {
                        url: '/',
                        iconUrl: twitterIcon,
                        platform: 'Twitter'
                        }
                    ]}
                />
            </div>
        )
    }
}

export default Header