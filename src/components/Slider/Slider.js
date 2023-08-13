import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TbArrowRampLeft3, TbArrowRampRight3 } from "react-icons/tb";
import *as classes from "./Slider.module.css";

const Slider = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    let lastIndex = data.length - 1
    // интервал автоматического перключения
    // useEffect(() => {
    //     let timeSet = setInterval(() => {
    //         if (currentIndex >= lastIndex) {
    //             setCurrentIndex(0)
    //         } else { setCurrentIndex(currentIndex + 1) }
    //     }, 5000)
    //     return () => { clearInterval(timeSet) }
    // }, [currentIndex, data])


    const prevSlide = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(lastIndex)
        } else { setCurrentIndex(currentIndex - 1) }
    }
    const nextSlide = () => {
        if (currentIndex >= lastIndex) {
            setCurrentIndex(0)
        } else { setCurrentIndex(currentIndex + 1) }
    }

    return (
        <div className={classes.carousel}>

            {/*slider*/}
            {data.map((slide, slideIndex) => {
                return (
                    <GatsbyImage
                        image={getImage(slide.localFile.childImageSharp.gatsbyImageData)}
                        alt={slide.localFile.base.split("-").join(" ").split(".")[0]}
                        layout="constrained"
                        className={currentIndex === slideIndex ? classes.slide : classes.slide + ' ' + classes.slideHidden}
                        imgStyle={{ objectFit: `contain` }}
                        key={slide.localFile.childImageSharp.id}
                        priority="true"
                    />
                )
            })}

            {/*arrow block*/}
            <TbArrowRampLeft3
                className={classes.arrow + ' ' + classes.arrowLeft}
                onClick={prevSlide}
            />
            <TbArrowRampRight3
                className={classes.arrow + ' ' + classes.arrowRight}
                onClick={nextSlide}
            />

            {/*dots block*/}
            <span className={classes.indicators}>
                {data.map((_, dotIndex) => {
                    return <button
                        key={dotIndex} onClick={() => setCurrentIndex(dotIndex)}
                        className={currentIndex === dotIndex ? classes.indicator : classes.indicator + ' ' + classes.indicatorInactiv}
                        aria-label="indicator"
                    />
                })}
            </span>

            {/*number block*/}
            <div className={classes.blockNumbers}>{currentIndex + 1}/{data.length}</div>
        </div>
    )
}

export default Slider;
