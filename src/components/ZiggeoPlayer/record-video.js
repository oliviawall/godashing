import React, { useEffect, useState} from 'react';
import axios from 'axios';

import { ZiggeoRecorder } from 'react-ziggeo';

const API_KEY = 'a293c346773385bae50fb960f2210d2d';

const VideoPlayer = ({ api_key , user}) => {
    // const {email} = props.currentUser;
    return (
        <div className="record-player">
            <ZiggeoRecorder
                custom-covershots={[true]}
                apiKey={ api_key }
                height={ 300 }
                width={ 400 }
                tags={[user]}
            />
        </div>
    )
}
export default class RecordVideo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tag: 'user',
            user: '', // Tag for video '{email}'
        }
    }
    
    render(){
        const { tag } = this.state;
        console.log("FIND THE USER: ", this.props);
        return (
             <div className="container-fluid">
                {/* SideBar */}
                 <div className="row" style={{ width: '100%', height: '100%' }}>
                    
                    {/* Main Content */}
                    <div className="col-md-12">
                        {/* <div className="col-12 mt-4 d-flex justify-content-center">
                             <h3>Video Recorder</h3>
                        </div> */}
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            {
                               <VideoPlayer user={this.props.user} api_key={API_KEY} tags={tag} />
                            }
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}