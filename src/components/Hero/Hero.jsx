import React from 'react';
import arrow from '../../assets/arrow.png'
import handIcon from '../../assets/hand_icon.png'
import heroImage from '../../assets/images/woman-new.png'
import classes from './Hero.module.css'


const Hero = () => {
    console.log()
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={classes.hero}>
            <div className={classes["hero-left"]}>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className={classes["hero-hand-icon"]}>
                        <p>new</p>
                        <img src={handIcon} alt='icon' />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className={classes["hero-latest-btn"]} onClick={() => scrollToSection('new-collection')}>
                    <div >Latest Collection</div>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
            <div className={classes["hero-right"]}>
                <img src={heroImage} alt='hero' />
            </div>
        </div>
    )
}
export default Hero