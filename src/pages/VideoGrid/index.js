import firebase from "firebase";
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ResponsivePlayer from '../../components/Videos/index';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {ZiggeoPlayer} from 'react-ziggeo';



import './style.scss';



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

