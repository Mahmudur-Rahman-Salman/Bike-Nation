// import logo from './logo.svg';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddReviews from './components/AddReviews/AddReviews';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Notfound from './components/Notfound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'><Home></Home></Route>
            <Route path='/home'><Home></Home></Route>
            <Route path='/about'><About></About></Route>
            <Route path='/services'><Services></Services></Route>
            <Route path='/addService'><AddService></AddService></Route>
            <Route path='/login'><Login></Login></Route>
            <Route path='/reviews'><AddReviews></AddReviews></Route>
            <PrivateRoute path='/booking/:serviceId'><Booking></Booking></PrivateRoute>
            <PrivateRoute path='/dashboard'><Dashboard></Dashboard></PrivateRoute>
            <Route path='/register'><Register></Register></Route>
            <Route path='*'><Notfound></Notfound></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>




    </div>
  );
}

export default App;
