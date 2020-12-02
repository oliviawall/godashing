import React from 'react';
import profilepic from './../../assets/profilepic.png'

import './styles.scss';

const TheTeam = props => {
    return (
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="Jane" styles="width:100%" />
                    <div class="container">
                        <h2>Jake Shelby</h2>
                        <p class="title">CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="Jane" styles="width:100%" />
                    <div class="container">
                        <h2>Natalie Shelby</h2>
                        <p class="title">Marketing and Design</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="Mike" styles="width:100%" />
                    <div class="container">
                        <h2>Olivia Wall</h2>
                        <p class="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="John" styles="width:100%" />
                    <div class="container">
                        <h2>Sam McGrew</h2>
                        <p class="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="Jane" styles="width:100%" />
                    <div class="container">
                        <h2>Elijah Kay</h2>
                        <p class="title">Creative Media and Design</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src={profilepic} alt="Jane" styles="width:100%" />
                    <div class="container">
                        <h2>Matt Gundy</h2>
                        <p class="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TheTeam;