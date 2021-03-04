import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/DashingNew.png';

// const mapState = ({ user }) => ({
//     currentUser: user.currentUser,
//     // subscriptionActive: user.currentUser.subscriptionActive,

// });

// const loggedIn = props => {

//     const dispatch = useDispatch();
//     const { currentUser } = useSelector(mapState);
//     const [subscriptionActive, setSubscription] = useState(false);

//     const signOut = () => {
//         dispatch(signOutUserStart());
//     };

   
//     return (
//         <header className='header'>
//             <div className='wrap'>

//                 <div className='logo'>
//                     <Link to='/'>
//                         <img src={Logo} alt='Dashing LOGO' />
//                     </Link>
//                 </div>

//                 <div className='callToActions'>

//                     {currentUser && subscriptionActive && (
//                         <ul>
//                             <li>
//                                 <Link to='/dashboard'>
//                                     My Profile
//                                 </Link>
//                             </li>
//                             <li>
//                                 <span onClick={() => signOut()}>
//                                     LogOut
//                     </span>
//                             </li>
//                         </ul>
//                     )}
//                  </div>
//             </div>
//         </header>
//     )}
//         {!currentUser || currentUser === null && (

//             <ul>
//                 <li>
//                     <Link to='/employeeregistration'>
//                         Job Seekers
// </Link>
//                 </li>
//                 <li>
//                     <li>
//                         <Link to='/employerregistration'>
//                             Businesses
// </Link>
//                     </li>
//                     <Link to='/login'>
//                         Login
// </Link>
//                 </li>
//             </ul>
//  )};


// export default loggedIn;