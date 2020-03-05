import React from 'react';
import Nav from '../../components/nav/nav';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import open from '../../images/icon-hamburger.svg'
import logo from '../../images/logo-bookmark.svg'
import navigation from '../../content/navigation.json'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navState: false,
            prevScrollPos: window.pageYOffset,
            headerVisible: true
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount() {
        

        // couldn't register event handler defined outside of componentDidMount
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset
            const headerVisible = this.state.prevScrollPos > currentScrollPos;

            this.setState({
                prevScrollPos: currentScrollPos,
                headerVisible
            });
        });
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    toggleNav() {
        this.setState({
          navState: !this.state.navState
        })
    }


    render() {
        return(
            <div 
                id="header" 
                className={`header ${this.state.headerVisible ? 'header--sticky' : ''}`}
            >
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
                    sections={navigation.sections}
                    socials={[
                        {
                            id: 1,
                            url: '/',
                            iconUrl: facebookIcon,
                            platform: 'Facebook'
                        },
                        {
                            id: 2,
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