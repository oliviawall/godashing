import React from 'react';
import Home from './../../assets/home.png';
import './styles.scss';


const Directory = props => {

return (
    <div className='directory'>
        <div className='wrap'>
            <div
                className='item'
                style={{
                    backgroundImage: `url(${Home})`
                }}
            >
            <a>
                Why Go Dashing?
            </a>
            </div>
            <div
                style={{
                    backgroundImage: `url(${Home})`
                }}
            ></div>
        </div>
    </div>
    );
};

export default Directory;