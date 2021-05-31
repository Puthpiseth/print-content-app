import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Details from './pages/Details';
import Nav from './components/Nav';

function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
