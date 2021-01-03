import React from 'react';
import { Carousel, Item, Caption, Row, Col } from 'react-bootstrap';
import './styles.scss';

// images
import about from '../../assets/blueBackdrop.png'
import testimonials from '../../assets/greenBackdrop.png'
import signup from '../../assets/yellowBackdrop.png'

export default function CarouselHome() {
    return (
        <div className='carousel'>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Carousel>
                        <Carousel.Item interval={3500}>
                            <img
                                className='d-block w-100'
                                src={about}
                                alt='First slide'

                            />
                            <Carousel.Caption>
                                <h3>About Dashing</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3500}>
                            <img
                                className='d-block w-100'
                                src={testimonials}
                                alt='Second Slide'
                            />
                            <Carousel.Caption>
                                <h3>Testimonials</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3500}>
                            <img
                                className='d-block w-100'
                                src={signup}
                                alt='Third slide'
                            />
                            <Carousel.Caption>
                                <h3>Join the momentum</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </div>
    );
}

// Catch Phrases for carousel slides:

// take control of your first impression
// get to the front of the line
// ditch the resume
// managers only resume for 6 seconds - create a video instead
// hiring managers view their 400% 
// give managers the content they want to see
// 

// January 3/21 meeting with Jake we covered:
// 1. Gather content for landing page slides
// 2. Use pamphlet style lingo
// 3. Style dashboard to appear like YouTube (personal dashboard is clickable + includes resume and video resume + about me section + personal copy and paste QR code)
// 4. We re-ordered navbar layout to appeal to our main demographic 
// 5. Outstanding tasks to complete for launch:
//   - videos being stored on dashboard & job posting pages not just on ziggeo
//   - payment functionality must go through
//   - complete subscription component to include tiers for hiring manager options 
//   - style both registration pages to be more appealing