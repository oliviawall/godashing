import React from 'react';
import { Switch, Route } from 'react-router-dom';
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


function App() {
  return (
    <div className="App">
    
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path='/employeeregistration' render={() => (
            <MainLayout>
              <EmployeeRegistration />
            </MainLayout>
          )} />
          <Route path='/employerregistration' render={() => (
            <MainLayout>
              <EmployerRegistration />
            </MainLayout>
          )} />
        </Switch>
      </div>

  );
}

export default App;
