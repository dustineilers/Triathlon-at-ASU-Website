import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function FAQ() {
    return (
        <>
            <div className='faq'>
                <h1>Got a question? <br/>Get your answer.</h1>
                <p>Curious about Triathlon at ASU? <br/>Find out more about our club.</p>
            </div>
            <div className='faq-body'>
                <h2 className='heading'>What is triathlon?</h2>
                <p className='paragraph'>
                    Triathlon is a sport that is made up of three disciplines: 
                    swimming, biking, and running. The races are in the swim-bike-run 
                    order and come in a lot of different distances. 
                </p>
                <br/>
                <h2 className='heading'>I have never raced in a triathlon before, is that ok?</h2>
                <p className='paragraph'>
                    Absolutely it is! We understand that everyone’s triathlon career 
                    begins with their first triathlon (haha, duh!). Some of our members 
                    have swam their entire lives but haven’t ridden their bike more than 
                    5 miles, while others have run since they were little but never swam 
                    laps. Any amount of athletic background is ok and welcome. We are 
                    not a D1 team; we are a club, and that is evident in our inclusion and 
                    acceptance of members who can offer all levels of commitment with all 
                    levels of experience.
                </p>
                <br/>
                <h2 className='heading'>Am I signing up for an IRONMAN club? That is a huge race!</h2>
                <p className='paragraph'>
                    The triathlons that our club competes in are sprint and olympic distances. 
                    The distance of a spring triathlon is a 750 meter swim, a 20 kilometer bike 
                    and a 5 kilometer run and an olympic is just twice as long. We have members 
                    train for the longer distances and we support them, but our club practices 
                    are geared towards finishing and competing in sprint and olympic triathlons. 
                    We also volunteer at the IRONMAN Arizona race in November and cheer for our 
                    members who compete in that race.
                </p>
                <br/>
                <h2 className='heading'>What if I am on the fence, can I talk to someone about the club?</h2>
                <p className='paragraph'>
                    Of course! We encourage prospective members to come to a practice and say hello. 
                    We have a 2 week trial period that begins at the beginning of your practice. If 
                    you don’t think we are the right club for you then that is totally ok, but if we 
                    are then this is the perfect time to find out.
                </p>
                <br/>
                <h2 className='heading'>OK, you’ve convinced me! What's next?</h2>
                <p className='paragraph'>
                    Please refer to the registration page of this site, it has all the information 
                    required for joining an on-campus sports club. Make sure you join our discord 
                    for the most up to date information and the ability to message the president and 
                    vice president directly on our server. The last thing for you to do before 
                    becoming a full member is paying dues, $150 to be a member with travel covered and 
                    $50 for practice and social events. Social members have the opportunity to travel 
                    with the team but this must be worked out in advance with the travel officer.
                </p>
                <br/>
            </div>
            <Footer />
        </>
    );
};