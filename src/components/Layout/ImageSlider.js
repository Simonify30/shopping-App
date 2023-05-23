import { useState } from "react";

import classes from './ImageSlider.module.css';




const ImageSlider = ({slides})=>{

    const [currentIndex, setCurrentIndex] = useState(0)

    const changeImg = ()=>{
        setTimeout(() =>{
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
            setCurrentIndex(newIndex);
        },2000);
    };

    return(
        <div className={classes.slide}>
            <div className={classes.slider} onLoad={changeImg}>
                {slides[currentIndex].image}
            </div>
        </div>
    )

    
}

export default ImageSlider;