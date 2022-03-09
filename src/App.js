// import logo from './logo.svg';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navigation from './components/Navigation/Navigation';
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
            <Route path='/login'><Login></Login></Route>
            <Route path='/register'><Register></Register></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>




    </div>
  );
}

export default App;
