import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import EventItem from '../EventItem';

export default function Events() {
    return (
        <>
            <div className='events'/>
            <div className='events-body'>
                <div className='header'>
                    <h2>Fall Schedule</h2>
                </div>
                <ul>
                    <EventItem 
                    src='images/castlecreek.jpg' name='Castle Creek Triathlon' 
                    date='October 7th, 2023' city='Lake Pleasant, Arizona' 
                    path='https://4peaksracing.com/events/castle-creek-2023/' side='left'/>
                    <EventItem 
                    src='images/pumpkinman.jpg' name='Pumpkinman' 
                    date='October 28th, 2023' city='Boulder City, Nevada' 
                    path='https://register.bbscendurance.com/event/pumpkinman-triathlon-2023' side='right'/>
                    <EventItem 
                    src='images/tempetownlake.jpg' name='Splash and Dash #3' 
                    date='November 12th, 2023' city='Tempe, Arizona' 
                    path='https://4peaksracing.com/events/splash-dash-swim-3-2023/' side='left'/>
                </ul>
                <div className='header'>
                    <h2>Spring Schedule</h2>
                </div>
                <ul>
                    <EventItem 
                    src='images/tritonman.jpg' name='Tritonman' 
                    date='November 12th, 2023' city='San Diego, California' 
                    path='https://trionman.com' side='right'/>
                    <EventItem 
                    src='images/havasu.jpg' name='Lake Havasu Triathlon' 
                    date='March 17th, 2024' city='Lake Havasu City, Arizona' 
                    path='https://www.3disciplines.com/events/' side='left'/>
                    <EventItem 
                    src='images/cactusman.jpg' name='Cactus Man' 
                    date='April 28th, 2024' city='Tempe, Arizona' 
                    path='https://4peaksracing.com/events/cactus-man-2024/' side='right'/>
                </ul>
            </div>
            <Footer />
        </>
    );
};