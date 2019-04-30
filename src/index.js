import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import './responsive.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Search from './components/search';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';
import LandingPage from './views/landingpage';
import Blogs from './views/Blog';
import Offer from './views/offers';
import About from './views/about';
import Contact from './views/contact';
import Flight from './views/flights';
import Hotel from './views/hotels';

class App extends Component {
    state = {}
    render() {
        return ( < BrowserRouter >
            <
            Route path = '/landingpage'
            component = { LandingPage }
            /> <
            Route path = '/Blog'
            component = { Blogs }
            /> <
            Route path = '/offers'
            component = { Offer }
            /> <
            Route path = '/about'
            component = { About }
            /> <
            Route path = '/contact'
            component = { Contact }
            /> <
            Route path = '/flights'
            component = { Flight }
            /> <
            Route path = '/hotels'
            component = { Hotel }
            />

            <
            /BrowserRouter>
        );
    }
}

export default App;

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();