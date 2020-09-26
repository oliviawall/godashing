import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/about'>
                        Why Go Dashing?
                     </Link>
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