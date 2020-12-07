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
                    <h2 id='jake'>Jake Shelby</h2>
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
                <div className="card">
                    <img src={natalie} alt="nat" styles="width:100%" />
                    <div className="container">
                        <h2>Natalie Shelby</h2>
                        <p className="title">Marketing and Design</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>natalie@godashin.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src={olivia} alt="olivia" styles="width:100%" />
                    <div className="container">
                        <h2>Olivia Wall</h2>
                        <p className="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>olivia@godashing.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={sam} alt="sam" styles="width:100%" />
                    <div className="container">
                        <h2>Sam McGrew</h2>
                        <p className="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>sam@godashing.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src={elijah} alt="elijah" styles="width:100%" />
                    <div className="container">
                        <h2>Elijah Kay</h2>
                        <p className="title">Creative Media and Design</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>elijah@godashing.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={profilepic} alt="matt" styles="width:100%" />
                    <div className="container">
                        <h2>Matt Gundy</h2>
                        <p className="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TheTeam;