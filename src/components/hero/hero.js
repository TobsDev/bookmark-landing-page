import React from 'react';
import Button from '../../components/button/button'
import heroIllustration from '../../images/illustration-hero.svg'

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <img 
                src={heroIllustration}
                alt="Hero Illustration" 
                className="hero__image"
            />
            <h1 className="hero__headline">A simple bookmark manager</h1>
            <p className="hero__claim">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="hero__buttons">
                <Button 
                    cta="Get it on Chrome"
                />
                <Button 
                    cta="Get it on Firefox"
                    className="hero__button--secondary"
                />
            </div>
        </div>
    );
}

export default Hero