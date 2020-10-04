// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { signUpUser } from './../../redux/User/user.actions';
// import './styles.scss';

// import { auth, handleUserProfile } from './../../firebase/utils';

// import AuthWrapper from './../AuthWrapper';
// import FormInput from './../forms/FormInput';
// import Button from './../forms/Button';


// const EmployerSignup = props => {
//     const dispatch = useDispatch();
//     const [displayName, setDisplayName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errors, setErrors] = useState([]);

//     const reset = () => {
//         setDisplayName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setErrors([]);
//     };

//     const handleFormSubmit = async event => {
//         event.preventDefault();

//         if (password !== confirmPassword) {
//             const err = ['Password Do\'t match'];
//             setErrors(err);
//             return;
//         }

//         try {
//             const { user } = await auth.createUserWithEmailAndPassword(email, password);

//             await handleUserProfile(user, { displayName });
//             reset();
//             props.history.push('/');


//          } catch (err) {
//             // console.log(err);
//         }
//     }


        
//         const configAuthWrapper = {
//             headline: 'Business Registration'
//         };

//         return (
//             <AuthWrapper {...configAuthWrapper}>

//                 <div className='formWrap'>

//                 {errors.length > 0 && (
//                     <ul>
//                         {errors.map((err, index) => {
//                             return (
//                                 <li key={index}>
//                                     {err}
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 )}

//                     <form onSubmit={handleFormSubmit}>

//                     <FormInput
//                         type='text'
//                         name='displayName'
//                         value={displayName}
//                         placeholder='Business Name'
//                         handleChange={e => setDisplayName(e.target.value)}

//                     />
//                     <FormInput
//                         type='email'
//                         name='email'
//                         value={email}
//                         placeholder='Business Email'
//                         handleChange={e => setEmail(e.target.value)}

//                     />
//                     <FormInput
//                         type='password'
//                         name='password'
//                         value={password}
//                         placeholder='Password'
//                         handleChange={e => setPassword(e.target.value)}

//                     />
//                     <FormInput
//                         type='password'
//                         name='confirmPassword'
//                         value={confirmPassword}
//                         placeholder='Confirm Password'
//                         handleChange={e => setConfirmPassword(e.target.value)}
//                         />

//                         <Button type='submit'>
//                             Register Business
//                         </Button>
//                     </form>
//                 </div>
//             </AuthWrapper>

//         );
//     }

// export default withRouter(EmployerSignup);
