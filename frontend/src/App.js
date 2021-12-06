import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import Store from './pages/Store';
import Turf from './pages/Turf';
// import Footer from './components/Footer/Footer';

import CustCarousel from './components/Carousel/CustCarousel';

import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import Messaging from './components/Messaging/Messaging';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <CustCarousel />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && (
                  <Redirect from="/auth" to="/events" exact />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}
                {this.state.token && (
                  <Route path="/turf" component={Turf} />
                )}
                <Route path="/events" component={EventsPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                {this.state.token && (
                  <Route path="/store" component={Store} />
                )}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </main>
            {/* <Footer /> */}
          </AuthContext.Provider>
          <Messaging />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
