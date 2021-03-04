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

// const loggedOut = props => {
//     const dispatch = useDispatch();
//     const { currentUser } = useSelector(mapState);
//     const [subscriptionActive, setSubscription] = useState(false);

//     const signOut = () => {
//         dispatch(signOutUserStart());
//     };

//     return (
//         <header>
//             <div className='logo'>
//                 <Link to='/'>
//                     <img src={Logo} alt='Dashing LOGO' />
//                 </Link>
//             </div>
//             <div className='navbar'>
//                 <ul> 
//                     <li>
//                     <Link to='/employeeregistration'>
//                         Job Seekers
//                     </Link>
//                     </li>
//                     <li>
//                     <Link to='/employerregistration'>
//                             Hiring Managers
//                     </Link>
//                     </li>
//                     <li>
//                         <Link to='/about'>
//                             Mission
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to='/team'>
//                             Meet the Team
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to='/login'>
//                             Login
//                         </Link>
//                     </li>
//                     <li>
//                         <span onClick={() => signOut()}>
//                             LogOut
//                         </span>
//                     </li>

//                 </ul>
            
//             </div>
          
//         </header>
         


//     )};

// export default loggedOut;