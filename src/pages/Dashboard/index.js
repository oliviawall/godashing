<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
// import Button from './../../../../


// import QRcodes from '../../components/QRCodes';
import Lesson from '../../components/lesson';
import Videos from '../../components/Videos';
import ResponsivePlayer from "../../components/Videos/index";

const Dashboard = props => {
    return (

        <div className='dash'>
            <h1 >
                Welcome to your dashboard!
            </h1>
            
            <Container >
                <Row>
                    <Col className='resumelink'>
                        <Link to='/videogrid'>
                            Applicants Video Resumes
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row >
                    <Col lg = {true}>
                        <Lesson />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Videos />
                    </Col>
                </Row>
            </Container>
              
            
            
               
                
                
                {/* <QRcodes /> */}
                
                
        </div>
                
       
    );
    
};

export default Dashboard;
=======
import React, { useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userReducer from '../../redux/User/user.reducer';
import userTypes from '../../redux/User/user.types';
import VideoGrid from './../VideoGrid';
import './styles.scss';
import store from '../../redux/createStore';

//employeeLogin && signup parent comp.
//dashboard is child comp.
const Dashboard = props => {
    const [subscriptionStatus, dispatch] = useReducer(userReducer, userTypes.SUBSCRIPTION_STATUS);
    const [ subscriptionActive, setSubscription ] = useState(false);
    let status = useDispatch({type: userTypes.SUBSCRIPTION_STATUS});
    console.log(status);
    // [ ] Send out a dispatch to get subscription status
    // [ ] Assign the status to subscriptionActive state

    if (subscriptionActive) {
        return (
            <h2>
                <VideoGrid />
                My Awesome Dashboard
            </h2>
        )
    }
    else {
        return (
            <h2>
    
                Non-Subscribed Content
            </h2>
        );
    }
};

export default Dashboard;
>>>>>>> upstream/master
