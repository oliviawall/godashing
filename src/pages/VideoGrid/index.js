import firebase from "firebase";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {ZiggeoPlayer} from 'react-ziggeo';
import './styles.scss';
// import ReactPlayer from 'react-player';
// import ResponsivePlayer from '../../components/Videos/index';



        const mapState = ({ user }) => ({
            currentUser: user.currentUser
        });

        const VideoGrid = () => {
            const { currentUser } = useSelector(mapState);
            const [email, setEmail] = useState('');
            

        const userDetails = {
            user: {currentUser},
            id: '',
            userName: '',
            email: {email},
        }

        const userID = userDetails.user


        console.log(userID)


// class VideoGrid extends Component {

//     constructor (props) {
//         super (props);
//         this.state = {vids:[]}
//     }

//     render() {
    return (
            <div> 
            <Container className = 'gridTest'>
                    
                    <Col>
                        <Row>
                        <ziggeorecorder
                            ziggeo-popup
                            ziggeo-theme="minimalist"
                            ziggeo-themecolor="blue"
                            tags= {[
                                JSON.stringify(userID)
                            // <userReducer/>
                             ]}>
                        </ziggeorecorder>
                        </Row>
                    </Col>
                   
                   <ZiggeoPlayer
                   apiKey={'a293c346773385bae50fb960f2210d2d'}
                   video={'a741bfcb8dd370845ef2393ca614dc85'}
                   theme={'mminimalist'}
                   themecolor={'blue'}
                   skipinitial={false}
                //    onPlaying={this.playing}
                //    onPaused={this.paused}
                 />

            </Container>
            </div>
    
        );
        
    }
     


export default VideoGrid;
