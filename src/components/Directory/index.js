import React from 'react';
import { Link } from 'react-router-dom';
import blueBackdrop from './../../assets/blueBackdrop.png';
import './styles.scss';


const Directory = props => {

    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${blueBackdrop})`
                    }}
                >
                    <Link to='/about'>
                        Why Go Dashing?
                     </Link>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${blueBackdrop})`
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Directory;