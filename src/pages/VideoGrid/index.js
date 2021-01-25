import firebase from "firebase";
import React, { Component } from 'react';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
// import { useStore } from "react-redux";
import {ZiggeoPlayer} from 'react-ziggeo';
// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';


import './styles.scss';


class VideoGrid extends Component {
    
    constructor (props) {
        super();
        this.state = ({
            userEmail: 'soso@email.com',
            userId: '',
            userVideos: [],
        })
        this.i =0;
    }
    getUserInfo() {
        // get the Users email and Id from mapToState props
    }
    componentDidUpdate(){
        this.getUserInfo();
    }
    // in componentDidUpdate you will access the props from @ user.reducer
    // access the currentUser prop

    // componentDidMount = () => {
    //     this.context.Redux.getState(this.state)
    // }
    render() {
        return (
            <div> 
            <Container className = 'gridTest'>
                    
                    <Col>
                        <Row>
                        <ziggeorecorder
                            ziggeo-popup
                            ziggeo-theme="minimalist"
                            ziggeo-themecolor="blue"
                            // insert into tags user.email
                            tags={[this.state.userEmail, this.state.userId]}
                            >
                        </ziggeorecorder>
                        </Row>
                    </Col>
                   
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

// RE: storing Ziggeo content on dashboard:
// step 1 fetch vids
// step 2 store vids fetched
// step 3 filter through vids
// step 4 put the vids in the userVideo state 

// -----------------> Example of capturing the array of tags
// let vidArray = [{
//     tags: ['soso@email.com','32094809' ]
// },
// {
//     tags: ['soso2@email.com','32094809' ]
// }];

// let filteredVideos = vidArray.filter(video => {
//     if(video.tags[0] === this.state.userEmail || video.tags[1] === this.state.userId){
//         return video;
//     }
// })
// <---------------------

// must access the store - map state to props to store
// access the user.reducer store at currentUser: store.currentUser
// call the props in the application


// ==========INSTRUCTIONS=============
// [ ] GET THE USER INFO TO THE REDUCER STATE TO USE FOR STEP 2
// [ ] ADD THE USER EMAIL AND USER ID (OPTIONAL) TO THE VIDEO TAGS FOR UPLOAD TO ZIGGIO
// [ ] CREATE A VIDEO DISPLAY COMPONENT FOR THE USER TO SEE THEIR VIDEOS
// [ ] FETCH ALL VIDEOS FROM ZIGGEO API IN VIDEO DISPLAY COMPONENT
// [ ] FILTER THROUGH THE VIDEOS AND RETURN ALL THE ONES THAT MATCH THE USER EMAIL OR ID
// [ ] DISPLAY THE FILTERED VIDEOS

// ONCE THE USER VISITS THIS PAGE, DO THIS, AND THEN DO THIS

export default VideoGrid;
