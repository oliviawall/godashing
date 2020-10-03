import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

// hoc
import WithAuth from './hoc/withAuth';

// layouts //
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
 
// pages //
import Homepage from './pages/Homepage';
import About from './pages/About';
import EmployeeRegistration from './pages/EmployeeRegistration';
import EmployerRegistration from './pages/EmployerRegistration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import './default.scss';

const App = props => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      }

      setCurrentUser(userAuth);
     });

    return () => {
      authListener();
    };
  }, [])


    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} 
          />
          <Route path='/employeeregistration' render={() =>  (
            <MainLayout>
              <EmployeeRegistration />
            </MainLayout>
          )} />
          <Route path='/employerregistration' render={() =>  (
            <MainLayout>
              <EmployerRegistration />
            </MainLayout>
          )} />
          <Route path='/login' 
          render={() =>  (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
          <Route path='/recovery' render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path='/dashboard' render={() => (
          <WithAuth>
          <MainLayout>
            <Dashboard />
          </MainLayout>
          </WithAuth>
        )} />
        <Route path='/about'
        render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
        </Switch>
      </div>
    );
  }

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser  
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
