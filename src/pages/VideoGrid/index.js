import firebase from "firebase";
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ResponsivePlayer from '../../components/Videos/index';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {ZiggeoPlayer} from 'react-ziggeo';



<<<<<<< HEAD
import './style.scss';
=======
import './styles.scss';
>>>>>>> upstream/master



class VideoGrid extends Component {

    constructor (props) {
        super (props);
        this.state = {vids:[]}
    }

    render() {
        return (
            <div> 
                <Col>
                    <Row>
                       
                    </Row>
                </Col>
            <Container className = 'gridTest'>
                    
                    <Col>
                        <Row>
                        <ziggeorecorder
                            ziggeo-popup
                            ziggeo-theme="minimalist"
                            ziggeo-themecolor="blue">
                        </ziggeorecorder>
                        </Row>
                    </Col>
<<<<<<< HEAD
                    <Col>
                        <Row>
                            <ZiggeoPlayer/>
                        </Row>
                    </Col>
                     <Col>
                        <Row>
                            
                        </Row>
                       
                    </Col>
                    <Col>
                        <Row>
                            Video goes here.
                        </Row>
                    </Col>

            </Container>
            <Container className= 'gridTest'>
                <Col>
                    <Row>
                        Video goes here.
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Video goes here.
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Video goes here.
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Video goes here.
                    </Row>
                </Col>

            </Container>
            </div>
            
                
            
                  

            
           
                   
            
        )
        
    }

        
}

export default VideoGrid;

=======
                   
                   <ZiggeoPlayer
                   apiKey={'a293c346773385bae50fb960f2210d2d'}
                   video={'a741bfcb8dd370845ef2393ca614dc85'}
                   theme={'mminimalist'}
                   themecolor={'blue'}
                   skipinitial={false}
                   onPlaying={this.playing}
                   onPaused={this.paused}
                 />

            </Container>
            </div>
    
        )
        
    }
     
}

export default VideoGrid;
>>>>>>> upstream/master
