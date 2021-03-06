import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ZiggeoPlayer } from 'react-ziggeo';


const API_KEY = 'a293c346773385bae50fb960f2210d2d';

const VideoPlayer = ({ video_token, api_key, user}) => {

    return (
        <div className="video-player" >
            <ZiggeoPlayer
            
            sharevideo={['facebook','twitter']}
            apiKey={ api_key }
            video={ video_token }
            height={ 300 }
            width={ 400 }
            tags={[user]}
            
            
            
            ></ZiggeoPlayer>
        </div>
    )
}

export default class FilterVideos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tag: this.props.user, // Tag to filter videos with
            video_position: '',
            video_list: [],
            filtered_video_list: [],
            video: {},
            video_token: '',
            selected: false,
            user: ''
        }
    }
    
    componentDidMount(){
        if (this.props.user) this.setState({ user: this.props.user });
        
    }
    
    async getData() {

        // Get videos, then with response setState for video_list, then filter videos immediately
        axios.get('http://localhost:3001/video-list').then(response => this.setState({ video_list: response.data }, () => this.filterVideos() )); 
        
    }

    // This method is used to Filter Videos based on a certain Tag
    filterVideos() {
        let filtered_videos = this.state.video_list.filter( video => video.tags[0] === this.state.tag);
        this.setState({ filtered_video_list: filtered_videos });
    }


    componentDidMount() {
        this.getData();
    }
    
    videoSelectionHandler( video, video_position ){
        this.setState({ selected: false}, () => this.setState({ 
            video: video,
            video_position: video_position,
            selected: true,
            video_token: video.token,
            
        }))
    }

    render(){
        const { tag } = this.state;
        return (
            <div className="container-fluid">
                <div className="row" style={{ width: '100%', height: '100%' }}>
                      
                      
                      <div className="col-sm mt-4 d-flex justify-content-center" id="ziggeoplayer">
                          {
                              console.log("USER: ", this.props.user),
                              this.state.selected ? <VideoPlayer  tags={this.props.user } api_key={API_KEY} video_token={ this.state.video_token } tag={tag}/> : 'My Resumes:'
                             
                          }
                             
                      </div>
                  </div>
                  <br></br>
                {/* SideBar */}
                 <div className="row" style={{ width: '100%', height: '100%' }}>
                    <div className="col-sm p-1" id="grid" >
                        
                        {
                            // Filtered Video List
                            this.state.filtered_video_list.map( (video, index) => {
                                let isActive = this.state.video_position === index ? 'active' : ''
                                return <div key={index} className={"video-list p-1 "+ isActive} onClick={ this.videoSelectionHandler.bind(this, video, index)} style={{border: '1px solid purple'}}>{ video.tags[0], "Resume"}</div>
                            })
                        }
                  
                </div>
            </div> 
            
                {/* <div className="row" style={{ width: '100%', height: '100%' }}>
                      
                      <br></br>
                      <div className="col-sm mt-4 d-flex justify-content-center">
                          {
                              console.log("USER: ", this.props.user),
                              this.state.selected ? <VideoPlayer  tags={this.props.user } api_key={API_KEY} video_token={ this.state.video_token } tag={tag} /> : 'Select Video:'
                             
                          }
                             
                      </div>
                  </div> */}

                    {/* Main Content */}
                 
                </div>
             
        )
    }
}