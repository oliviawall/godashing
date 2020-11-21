import React from 'react';
import { Link } from 'react-router-dom';
import water from './../../assets/water.png';
import './styles.scss';


const Directory = props => {

    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${water})`
                    }}
                >
                    <Link to='/about'>
                        Why Go Dashing?
                     </Link>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${water})`
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Directory;