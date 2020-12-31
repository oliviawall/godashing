import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import { ZiggeoPlayer } from "react-ziggeo";
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, isSubscribed
    } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Does Ziggeo need to be announced here? --> 
    // const apiKey= 'a293c346773385bae50fb960f2210d2d';
    // const tags = ['name', 'email'];

    useEffect(() => {
        if (currentUser 
            // && isSubscribed
            ) {
            resetForm();
            history.push('/dashboard');
        }

    }, [currentUser]);


    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));

    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }


    const configAuthWrapper = {
        headline: 'LogIn'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                <form onSubmit={handleSubmit}>



                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />


                    <Button type='submit'>
                        Submit
                </Button>

                    <div className='socialSignin'>
                        <div className='row'>
                            <Button onClick={handleGoogleSignIn}>
                                Sign in with Google
                    </Button>

                        </div>
                    </div>

                    <div className='links'>
                        <Link to='/recovery'>
                            Reset Password
                            </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignIn;
