import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Login';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';

export const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <HomeTemplate path="/home" exact Component={Home} />
                <UserTemplate path="/login" exact Component={Login} />
                <HomeTemplate path="/register" exact Component={Register} />
                <HomeTemplate path="/detail/:id" exact Component={Detail} />
                <HomeTemplate path="/news" exact Component={News} />
                <HomeTemplate path="/contact" exact Component={Contact} />
                <HomeTemplate path="/" exact Component={Home} />
                <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
            </Switch>
        </Router>
    );
}

export default App;
