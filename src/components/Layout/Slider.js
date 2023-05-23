import React from 'react';
import ImageSlider from './ImageSlider';

import classes from './Slider.module.css';

import vitamine from '../assets/images/vatamin.webp';
import ladies from '../assets/images/ladies.jpg';
import ladyshine from '../assets/images/lady-shine.jpg';
import collagen from '../assets/images/collagen.jpg';


const Slide = () => {
    const slides = [
        {image: <img src={vitamine} alt='vitamine'/>, title: 'vatamine'},
        {image: <img src={ladies} alt='ladies'/>, title: 'ladies'},
        {image: <img src={ladyshine} alt='ladyshine'/>, title: 'ladyshine'},
        {image: <img src={collagen} alt='vitamine'/>, title: 'collagen'},

    ];


    return(
    <div className={classes.slider}>
       <div className={classes.container}>
        <ImageSlider slides={slides}/>
       </div>
        
    </div>
    )

}

export default Slide;