// import logo from './logo.svg';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route exact path='/home'><Home></Home></Route>
          <Route exact path='/about'><About></About></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
