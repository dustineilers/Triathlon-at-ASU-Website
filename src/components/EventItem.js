import React from 'react';
import { Link } from 'react-router-dom';

function EventItem(props) {

    return (
        <>
            <li className='event'>
                { props.side === 'left' ? (<img class='image' src={props.src} alt='Castle Creek Triathlon' />) : null }
                <div>
                    <a href={props.path} target='_blank' rel='noreferrer'>
                        <h3 className='race-name'>{props.name}</h3>
                    </a>
                    <h3 className='city'>{props.city}</h3>
                    <h3 className='date'>{props.date}</h3>
                </div>
                { props.side === 'right' ? (<img class='image' src={props.src} alt='Castle Creek Triathlon' />) : null }
            </li>
        </>
    );
};

export default EventItem;