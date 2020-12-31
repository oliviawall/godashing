import React from 'react';
import { Carousel, Caption, Row, Col } from 'react-bootstrap';
import './styles.scss';

// images
import LogoInfo from '../../assets/dashing.png'
import RainImg from '../../assets/water.png'
import WalkingSlide from '../../assets/bold.png'

export default function CarouselHome() {
    return (
        <div className='carousel'>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                                className='d-block w-100'
                                src={LogoInfo}
                                alt='First slide'
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className='d-block w-100'
                                src={RainImg}
                                alt='Second Slide'
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={WalkingSlide}
                                alt='Third slide'
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </div>
    );
}
