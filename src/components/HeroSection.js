import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>TRIATHLON AT ASU</h1>
            <p>Swim. Bike. Run.</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    source='/faq'
                >
                    LEARN MORE
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                    source='https://fitness.asu.edu/programs/sportclubs/join'
                    target='_blank'
                >
                    JOIN NOW <i className='far 
                    fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;