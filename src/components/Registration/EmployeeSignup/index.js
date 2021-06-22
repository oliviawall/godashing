import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signUpUserStart } from '../../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from '../../AuthWrapper';
import FormInput from '../../forms/FormInput';
import Button from '../../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});


/*
Redux - 5steps?
appContext
    many other things
    userContext = user info
    toolContext = tool info

    import appContext
    const user = appContext.userContext;
    user.

userObj
    intState
        email = ''
        name = ''
        isSubsribed = false
        more..

login - userObj found database - set userObj

signup - userObj - (importing appContext) - appContext.isSubscibed = false, appContext.email = myEamil@gmail.com...
    e.submit executed
        userObj = {appContext.isSubscibed = false, appContext.email = myEamil@gmail.com...}
*/


const EmployeeSignup = props => {
    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // currently app directs user to subscription page upon creating an account. but as I have not successfully connected the Stripe B.E. it never allows access to their dashboard. This should change upon pressing "pay". This is when I wrap the dashboard component in both "withAuth" and "withSub" which should solve this upon B.E. host listening and receiving calls...

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/pay');
        }

    }, [currentUser]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }

    }, [userErr]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //let subscriptionActive = false;
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword,
        }));

    }

    const configAuthWrapper = {
        headline: 'Personal Signup'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>

            <div className='formWrap'>

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}

                <form onSubmit={handleFormSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        placeholder='Full Name'
                        handleChange={e => setDisplayName(e.target.value)}

                    />
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
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        handleChange={e => setConfirmPassword(e.target.value)}

                    />

                    <Button type='submit'>
                        Register
                    </Button>

                </form>

                {/* Already have an account? buttons */} 
                <p className='links add-space'>
                    Already have an account? 
                    <Link className="login-link" to='/login'>LOGIN</Link>
                </p>
            </div>
        </AuthWrapper>

    );
}


export default EmployeeSignup;


// Note to self: Olivia
// remove dashboard "nonsubscribed content" message until subscriptions are complete
