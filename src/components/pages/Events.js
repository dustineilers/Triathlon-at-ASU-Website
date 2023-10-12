import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Events() {
    return (
        <>
            <div className='events'/>
            <div className='events-body'>
                <div className='header'>
                    <h2>Fall Schedule</h2>
                </div>
                <ul>
                    <li className='event'>
                        <img class='image' src='images/castlecreek.jpg' alt='Castle Creek Triathlon' />
                        <div>
                            <a href='https://4peaksracing.com/events/castle-creek-2023/' target='_blank' rel='noreferrer'>
                                <h3 className='race-name'>Castle Creek Triathlon</h3>
                            </a>
                            <h3 className='city'>Lake Pleasant, Arizona</h3>
                            <h3>October 7th, 2023</h3>
                        </div>
                    </li>
                    <li className='event'>
                        <div>
                            <a href='https://register.bbscendurance.com/event/pumpkinman-triathlon-2023' target='_blank' rel='noreferrer'>
                                <h3 className='race-name'>Pumpkinman</h3>
                            </a>
                            <span className='city'>Boulder City, Nevada</span>
                            <h3>October 28th, 2023</h3>
                        </div>
                        <img class='image' src='images/pumpkinman.jpg' alt='Castle Creek Triathlon' />
                    </li>
                    <li className='event'>
                        <img class='image' src='images/tempetownlake.jpg' alt='Castle Creek Triathlon' />
                        <div>
                            <a href='https://4peaksracing.com/events/splash-dash-swim-3-2023/' target='_blank' rel='noreferrer'>
                                <h3 className='race-name'>Splash and Dash #3</h3>
                            </a>
                            <h3 className='city'>Tempe Town Lake, Arizona</h3>
                            <h3>November 12th, 2023</h3>
                        </div>
                    </li>
                </ul>
                <div className='header'>
                    <h2>Spring Schedule</h2>
                </div>
                <ul>
                    <li className='event'>
                        <div>
                            <a href='http://tritonman.com' target='_blank' rel='noreferrer'>
                                <h3 className='race-name'>Tritonman</h3>
                            </a>
                            <h3 className='city'>San Diego, California</h3>
                            <h3>February 11th, 2024</h3>
                        </div>
                            <img class='image' src='images/tritonman.jpg' alt='Castle Creek Triathlon' />
                    </li>
                    <li className='event'>
                            <img class='image' src='images/havasu.jpg' alt='Castle Creek Triathlon' />
                        <div>
                        <a href='https://www.3disciplines.com/events/' target='_blank' rel='noreferrer'>
                            <h3 className='race-name'>Lake Havasu Triathlon</h3>
                        </a>
                            <h3 className='city'>Lake Havasu City, Arizona</h3>
                            <h3>March 17th, 2024</h3>
                        </div>
                    </li>
                    <li className='event'>
                        <div>
                        <a href='https://4peaksracing.com/events/cactus-man-2024/' target='_blank' rel='noreferrer'>
                            <h3 className='race-name'>Cactus Man</h3>
                        </a>
                            <h3 className='city'>Tempe Town Lake, Arizona</h3>
                            <h3>April 8th, 2024</h3>
                        </div>
                            <img class='image' src='images/cactusman.jpg' alt='Castle Creek Triathlon' />
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
};