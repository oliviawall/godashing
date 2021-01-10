import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import AboutImage from '../../assets/web.png';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about'>
            <img class='aboutImg' src={AboutImage} alt='background' style={{ width: '100%', position: 'absolute', marginTop: '0%', height: '91%', zIndex: -1, objectFit: 'cover' }} />
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <h1 className='aboutTitle' style={{ marginLeft: '4%', marginBottom: '4%', marginTop: '4%' }}>Our Mission</h1>
                </Col>
            </Row>
            <div className='aboutContent'>
                <br />
                <Row style={{ marginLeft: '0%' }}>
                    <Col xs={12} md={12} lg={12}>
                        <Card>
                            <Card.Body>
                                Dashing is a company that helps you make an impression and get a job using one minute videos on your job application.
                                We were created out of a need for ourselves to stand out in the massive unemployment hike of the Covid-19 pandemic.
                                Our CEO Jake Shelby had just finished school in March of 2020 when he realized that he had to do more than just submit a
                                typical resume. He knew he needed to let the hiring managers see him speak, as opposed to skimming his paper resume and
                                stalking social media to see his personality.At Dashing, we believe the traditional resume is now obsolete and the wave of the future is having a secure,
                                online place for hiring managers to get a real impression of the job candidate via videos.
                                Hiring managers can hear and see you, as opposed to read about you, while simultaneously skimming your job application.
                                The goal is to take control of the first impression, all while becoming more than just another paper in a stack of resumes.
                                With Dashing's easy-to-make online profiles, hiring managers can greatly reduce the time and costs of first wave,
                                in-person interviews. Job applicants likewise can greatly increase the chances of getting a job/interview opportunity.
                                <br />
                                <br />
                                <a href="https://www.facebook.com/DashingCo-113381857100452/" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="google"><i class="fa fa-google"></i></a>
                                <a href="https://www.instagram.com/dashingco/" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                {/* <Row style={{ marginLeft: '0%' }}>
                    <Col xs={12} md={12} lg={12}>
                        <Card>
                            <Card.Body> */}
                                <Link to='/employeeregistration'>
                                    <Button className='startTrial' type='submit' style={{ position: 'absolute', width: '50%', marginLeft: '25%' }}>
                                        Start Your 7 Day Free Trial
                                    </Button>
                                </Link>
                            {/* </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </div>
        </div>
    );
}

export default About;
