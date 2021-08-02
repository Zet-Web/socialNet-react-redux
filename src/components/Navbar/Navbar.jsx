import React from 'react';

import s from './navbar.module.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import DialogItem from '../Dialogs/DialogItem/DialogItem';

const Navbar = (props) => {
  /*
  const {
    state: { dialogs },
  } = props;
*/

  /*  const dialogElements = dialogs.slice(0, 3).map((key) => {
    return (
      <span key={key.id}>
        <img src={key.avatar} id={key.id} width='20' alt='key.name' />
        <span key={key.id} className={s.friend}>
          {key.name}
        </span>
      </span>
    );
  });*/
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/profile' activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
      <div className='friends'>
        <h2>Friends</h2>

        {/*{dialogElements}*/}
      </div>
    </nav>
  );
};
export default Navbar;
