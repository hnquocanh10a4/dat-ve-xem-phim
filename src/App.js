import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Login';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch> 
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/login' exact Component={Login} />
        <HomeTemplate path='/register' exact Component={Register} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path="/" exact Component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
