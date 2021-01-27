import React from 'react';
import profilepic from './../../assets/profilepic.png'
import jake from './../../assets/jake.png'
import natalie from './../../assets/natalie.png'
import olivia from './../../assets/olivia.png'
import sam from './../../assets/sam.png'
import elijah from './../../assets/elijah.png'


import './styles.scss';

const TheTeam = props => {
    return (
        <div className="row">
            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={jake} alt="jake" styles="width:100%" />
                            <h2 id='team'>Jake Shelby</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                                <p className="title">CEO &amp; Founder</p>
                                <p>Born in central Texas and making his way to Northern California, Jake attended college and started his first company. Upon success, Jake leaned into an active roll as 'Investor', where he began interviewing startups nearby in order to invest and add value as a team member. Since then, Jake has been a part of a handful of profitable startups that raised money and went into the market. Currently, as the original Founder of Dashing, he hails from the East Bay area in California with his wife. Together, they also run a premium handcrafted leather company.
                        </p>
                                <p>jake@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={natalie} alt="natalie" styles="width:100%" />
                            <h2 id='team'>Natalie Shelby</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                                <p className="title">Marketing &amp; Design</p>
                                <p> About Natalie
                        </p>
                                <p>natalie@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={sam} alt="sam" styles="width:100%" />
                            <h2 id='team'>Sam McGrew</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                                <p className="title">Developer</p>
                                <p>Sam lives in the island city of Victoria, British Columbia, where he goes on adventures with his beautiful wife and four amazing kids. Sam has a deep love for all things creative, whether it be in a movie, a story, a work of art, or a beautiful design. Sam’s interest in coding was sparked when he attended the Bethel School of Technology in 2019, where he assumes he graduated at the top of his class with distinct honors. While this has actually not been confirmed, he’s never specifically been told otherwise, either. He is quite happy to go on thinking of this as fact as he codes from his favorite table at the Public Market.
                        </p>
                                <p>sam@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={olivia} alt="olivia" styles="width:100%" />
                            <h2 id='team'>Olivia Wall</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                            <p className="title">Lead Developer</p>
                            <p> Hailing from the Great Canadian Rockies, Olivia grew up a lover of beauty and the outdoors. Music and the arts became a daily expression of her passion for life. Early on, she dove into the world of performance, composition, and technique, also enjoying the opportunity to teach what she loved. Whether through a paint brush, coding or putting lyrics on a page, Olivia has always been found creating something.
                          </p>
                            <p>olivia@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={elijah} alt="elijah" styles="width:100%" />
                            <h2 id='team'>Elijah Kay</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                                <p className="title">Marketing &amp; Media</p>
                                <p>Elijah is a Georgia bred boy currently residing in Northern California with his beautiful wife. He grew up playing in hardcore metal bands until his senior year of high school and then found a new passion in media and marketing. He currently owns and operates a very successful media company based out of Northern California.
                        </p>
                                <p>elijah@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="flip-card">
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={profilepic} alt="blake" styles="width:100%" />
                            <h2 id='team'>Mr Hello</h2>
                        </div>
                        <div className='flip-card-back'>
                            <div className="container">

                                <p className="title">Developer</p>
                                <p>Mr Hello
                        </p>
                                <p>hello@godashing.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default TheTeam;
