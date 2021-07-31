import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.dialogsPage} />
      <div className='app-wrapper-content'>
        <Switch>
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs
                /*state={props.state.dialogsPage}
                dispatch={props.dispatch}*/
                store={props.store}
              />
            )}
          />
          <Route
            path='/profile'
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
