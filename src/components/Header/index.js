import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { loggedIn } from './../HeaderLoggedIn/index';
import { loggedOut } from './../HeaderLoggedOut/index';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/DashingNew.png';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    // subscriptionActive: user.currentUser.subscriptionActive,

});

const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const [subscriptionActive, setSubscription] = useState(false);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    useEffect(() => {
        console.log("currentUser:\n==== \=======\n", currentUser)

        if (currentUser) { setSubscription(true) }//<loggedIn/> takes this place

        else if (!currentUser) {
            // currentUser = false;
            setSubscription(false)
            //<loggedOut/>
        }
    })

    return (
        <header className='header'>
            <div className='wrap'>

                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt='Dashing LOGO' />
                    </Link>
                </div>

                <div className='callToActions'>

                    {currentUser && subscriptionActive && (
                        <ul>
                            <li>
                                <Link to='/dashboard'>
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()}>
                                    LogOut
                    </span>
                            </li>
                        </ul>
                    )} 

                   

                                {!currentUser || currentUser === null && (

                                    <ul>
                                        <li>
                                            <Link to='/employeeregistration'>
                                                Job Seekers
                    </Link>
                                        </li>
                                        <li>
                                            <li>
                                                <Link to='/employerregistration'>
                                                    Businesses
                    </Link>
                                            </li>
                                            <Link to='/login'>
                                                Login
                    </Link>
                                        </li>
                                    </ul>
                                )}
                     {/* Simplified navbar with dropdown on hover. Idea is to implement this idea within the Link function I have currently --> }
                    {/* <div className='navbar'>
                        <a href="#about">Mission</a>
                        <a href="#news">Testimonials</a>
                        <div className='dropdown'>
                            <button className='dropbtn'>I'm Interested
                        <i className='fa fa-caret-down'></i>
                            </button>
                            <div className='dropdown-content'>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a> */}
                                {!subscriptionActive && (
                                   <div className='navbar'>
                                   <ul> <li>
                                        <Link to='/employeeregistration'>
                                            Job Seekers
                                        </Link>
                                    </li>
                                             <li>
                                            
                                                <Link to='/employerregistration'>
                                                    Hiring Managers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/about'>
                                                    Mission
                    </Link>
                                            </li>
                                            <li>
                                                <Link to='/team'>
                                                    Meet the Team
                    </Link>
                                            </li>

                                        <li>
                                            <Link to='/login'>
                                                Login
                    </Link>
                                        </li>

                                    </ul>
                                </div>
                                )}</div>
                        </div>
                    {/* </div>
                </div>
            </div> */}
        </header>
    );
};

Header.defaultProps = {
    currentUser: null

};

export default Header;
