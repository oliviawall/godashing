import React from 'react';
import { Carousel, Item, Caption, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';

// images
import transp3 from '../../assets/transp3.png'
import transp1 from '../../assets/transp1.png'
import why from '../../assets/whytransp.png'
import transp2 from '../../assets/transp2.png'
import stats from '../../assets/stats.png'


export default function CarouselHome() {
    return (
        <div className='carousel'>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                           <Link to='/about'>

                            <img
                                className='d-block w-100'
                                src={transp3}
                                alt='First slide'

                            />
                            </Link>
                           
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className='d-block w-100'
                                src={transp1}
                                href='/testimonials'
                                alt='Second Slide'
                            />
                           
                        </Carousel.Item>
                       
                        <Carousel.Item interval={3000}>
                            <img
                                className='d-block w-100'
                                src={transp2}
                                alt='First slide'

                            />
                      
                        </Carousel.Item> 
                        <Carousel.Item interval={3000}>
                            <img
                                className='d-block w-100'
                                src={why}
                                alt='Third slide'
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className='d-block w-100'
                                src={stats}
                                alt='First slide'

                            />
                         
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