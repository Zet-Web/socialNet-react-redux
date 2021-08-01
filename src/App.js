import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/*<Navbar state={props.state.dialogsPage} />*/}
      <div className='app-wrapper-content'>
        <Switch>
          <Route
            path='/dialogs'
            render={() => (
              <DialogsContainer
              /*state={props.state.dialogsPage}
                dispatch={props.dispatch}*/
              //store={props.store}
              />
            )}
          />
          <Route
            path='/profile'
            render={() => (
              <Profile
              //store={props.store}
              /* profilePage={props.state.profilePage}
                dispatch={props.dispatch}*/
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
