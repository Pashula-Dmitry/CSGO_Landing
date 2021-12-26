import React from 'react';
import './Slider.css';
import {useInView} from "react-intersection-observer";

const Slider = (props) => {
    const {imageSrc, title, subtitle, flipped} = props;
    const { ref, inView } = useInView({
        threshold: 0.35,
    });

    const renderContent = () => {
            return (
                <>
                    {
                       !flipped && <img src={imageSrc} alt="not found" className="slider__image"/>
                    }
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p className="slider__subtitle">{subtitle}</p>
                    </div>
                    {
                        flipped && <img src={imageSrc} alt="not found" className="slider__image"/>
                    }
                </>
            )
    };

    return (
        <div className={inView ? 'slider slider--zoom' : 'slider'} ref={ref}>
            {renderContent()}
        </div>
    );
};

export default Slider;
