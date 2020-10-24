import React, { useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// components 
import AdminToolbar from './components/AdminToolbar';
import Paypal from './components/Payment/Paypal';
import CheckoutForm from './components/Payment/Stripe/CheckoutForm';
// import ProtectedRoute from './components/ProtectedRoute';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts //
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
 
// pages //
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import EmployeeSignup from './components/Registration/EmployeeSignup';
import EmployerSignup from './components/Registration/EmployerSignup';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import VideoGrid from './pages/VideoGrid';
import './default.scss';


const App = props => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkUserSession());

  }, [])

    return (
      <div className="App">
        <AdminToolbar />
        <Switch>  
           <Route exact path='/' render={() => ( 
            <HomepageLayout>
              <Homepage />
            </HomepageLayout> 
          )} />

          <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
          <Route path='/employeeregistration' render={() =>  (
            <MainLayout>
              <EmployeeSignup />
            </MainLayout>
          )} />
          <Route path='/employerregistration' render={() =>  (
            <MainLayout>
              <EmployerSignup />
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
        <Route exact path='/dashboard' render={() => (
          <WithAuth>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
          </WithAuth>
        )} />
        <Route path='/about'
        render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
          <Route path='/videogrid' render={() => (
          <MainLayout>
            <VideoGrid />
          </MainLayout>
      )} />
        <Route path='/contact'
        render={() => (
          <MainLayout>
            <Contact />
          </MainLayout>
        )} />
         <Route path='/paypal'
        render={() => (
          <MainLayout>
            <Paypal />
          </MainLayout>
        )} />
        <Route path='/stripe'
        render={() => (
          <MainLayout>
            <CheckoutForm />
          </MainLayout>
        )} />
        <Route path='/admin' render={() => ( 
          <WithAdminAuth>
          <AdminLayout>
            <Admin />
          </AdminLayout>   
          </WithAdminAuth>
        )} />
        </Switch>
      </div>
    );
  }

export default App;
