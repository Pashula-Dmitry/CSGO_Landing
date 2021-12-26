import React from 'react';
import './Hero.css';

const Hero = (props) => {
    const {imageSrc} = props;
    return (
        <div className="hero">
            <img src={imageSrc} alt="not found" className="hero__image"/>
            <h1 className="hero__title">CS:GO Legends</h1>
        </div>
    );
};

export default Hero;
