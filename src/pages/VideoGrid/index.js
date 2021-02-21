import firebase from "firebase";
import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import {API_KEY, VIDEO_TOKEN, videos } from '../../components/ZiggeoPlayer/constants';
import {ZiggeoRecorder, ZiggeoPlayer} from 'react-ziggeo';
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";

// import { video_list } from '../../components/ZiggeoPlayer/constants';


// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
import './styles.scss';



const VideoGrid = props => {
    const { email} = props.currentUser
    console.log('EMAIL: ', email)

    const [recorder, setRecorder] = useState(null);
    const [player, setPlayer] = useState(null);

    // const response = ziggeo_app.videos.index(videos, {"server_auth": API_KEY});

    // useEffect ( () => {
    //     fetch ('/v1/applications/a293c346773385bae50fb960f2210d2/videos/')
    //     .then (response.success)
    // }, []);
        
    
    // useEffect(() => {
    //     if (recorder) {
    //         // DO stuff here
    //         recorder.on("any_event", function (rec) { ... }, recorder);
    //         recorder.get("attribute_name");
    //     
    // }, [recorder]);`

    useEffect(() => {
        if (player) {
            // DO stuff here
            player.on("attached", function (embedding) {}, player);
        }
    }, [player]);
    

    // Embedding (player/recorder instance) will be the first argument
    const handleRecorderRecording = (embedding) => {
        console.log('Recorder onRecording');
    };
    
    const handleRecorderUploading = (embedding) => {
        console.log('Recorder uploading');
    };

    const handlePlaying = (embedding) => {
        console.log('it\'s playing, your action here');
    };
 
    const handlePaused = (embedding) => {
        console.log('it\'s paused, your action when pause');
    };

   


    return (
        <div> 
        <video_list/>
       
        <Container className = 'gridTest'>
                
                <Col>
                    <Row>
                    <ZiggeoRecorder
                        apiKey={API_KEY}
                        ziggeo-popup
                        ziggeo-theme="minimalist"
                        ziggeo-themecolor="blue"
                        // insert into tags user.email
                        tags={[email]}
                        height={180}
                        width={320}
                        onRef={ref => (setRecorder(ref))}
                        >
                    </ZiggeoRecorder>
                    </Row>
                </Col>
                <Col>
                <h1>My Video Resumes:</h1>
                <ul>
                    {
                        videos.length > 0 && videos.map(({video}, index) =>
                            <ul key={index}>
                                    <ZiggeoPlayer 
                                    apiKey={API_KEY}
                                    video={video} 
                                    height={240} 
                                    width={380}
                                    tags={[email]}
                                    theme={'minimalist'}
                                    themecolor={'blue'}
                                    skipinitial={false}                  
                                    onPlaying={handlePlaying}
                                    onPaused={handlePaused}
                                    onRef={ref => (setPlayer(ref))} />
                            </ul>
                            
                        )
                    }
                </ul>
                </Col>
            

        </Container>
        </div>

    )
    
}

export default VideoGrid;


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

// MENTAL WALKTHROUGH OF CURRENT PROCESS ( 01/27/21 ) - OLIVIA //

// [ ] SHOULD BE ABLE TO VIEW RECORDED VIDEO ON THE VIDEOGRID PAGE AFTER RECORDING: 

// ----------- POINTS NOTICED ALONG THE WAY ------------------ //
// [ ] CONSOLE LOG IS NOT RETURNING CURRENT USER EVEN THOUGH LOGGED IN
// [ ] UPON RECORDING, I RETRIEVE NO PERSONAL USER DATA IN ZIGGEO
// [ ] MY TAGS IN VIDEO RECORDER ON VSCODE ARE NOT RETURNING A UNIQUE IDENTIFIER ( SUCH AS USER EMAIL ) 
// [ ] DO I NEED TO UPDATE MY REDUX USER.REDUCER OR SOMETHING IN USER.ACTIONS
// [ ] ARE MY HOC OR MY CUSTOM HOOKS A PART OF PASSING CURRENT USER DATA
// [ ] Ziggo's docs on tags: 
// [ ] "Tags [ array ]
// [ ]  tags (keywords) to associate with newly created video"
