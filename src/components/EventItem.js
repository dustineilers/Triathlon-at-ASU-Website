import React from 'react';
import { Link } from 'react-router-dom';
import './EventItem.css';

function EventItem(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => domRef.current && observer.unobserve(domRef.current);
    }, []);
    return (
        <>
            <li className={`event ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
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