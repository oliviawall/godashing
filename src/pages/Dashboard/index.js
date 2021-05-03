import React, { useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userReducer from '../../redux/User/user.reducer';
import userTypes from '../../redux/User/user.types';
import VideoGrid from './../VideoGrid';
import './styles.scss';
import store from '../../redux/createStore';

//employeeLogin && signup parent comp.
//dashboard is child comp.

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    subscriptionActive: user.subscriptionActive,
});

const Dashboard = props => {
    console.log('rendering before all dispatched actions')
    // we need connect to redux global state and map state to props the currentUser from success sign in
    const { currentUser } = useSelector(mapState);
    console.log('CURRENT USER INSIDE DASH: ', currentUser)


    const { subscriptionActive } = useSelector(mapState);
    console.log('SUB ACTIVE OR NOT YO:', subscriptionActive)
    // const [subscriptionStatus, dispatch] = useReducer(userReducer, userTypes.SUBSCRIPTION_STATUS);
    // const [subscriptionActive, setSubscription] = useState(false);
    //let status = useDispatch({ type: userTypes.SUBSCRIPTION_STATUS });
    // [ ] Send out a dispatch to get subscription status
    // [ ] Assign the status to subscriptionActive state

    if (currentUser && !subscriptionActive) 
    {
        return (
            <h2>
                Dashboard
                <VideoGrid currentUser={currentUser} />
                
            </h2>
        )
    }
    else {
        return (
            <h2>
                Non-Subscribed Content
            </h2>
        );
    }
};

export default Dashboard;
