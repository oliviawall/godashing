import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import './default.scss';

// components //

import Header from './components/Header';
import Footer from './components/Footer';

// layouts //

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages //

import Homepage from './pages/Homepage';
import EmployeeRegistration from './pages/EmployeeRegistration';
import EmployerRegistration from './pages/EmployerRegistration';
import Login from './pages/Login';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     ...initialState
   };
  };

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snpshot => {
          this.setState({
            currentUser: {
              id: snpshot.id,
              ...snpshot.data()
            }
          })
        })
      }
      this.setState({
        ...initialState
      });
     });
   }
    
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path='/employeeregistration' render={() => (
            <MainLayout currentUser={currentUser}>
              <EmployeeRegistration />
            </MainLayout>
          )} />
          <Route path='/employerregistration' render={() => (
            <MainLayout currentUser={currentUser}>
              <EmployerRegistration />
            </MainLayout>
          )} />
          <Route path='/login' 
          render={() => currentUser ? <Redirect to='/' /> : (
            <MainLayout currentUser={currentUser}>
              <Login />
            </MainLayout>
          )} />
        </Switch>
      </div>

    );
  }

}

export default App;
