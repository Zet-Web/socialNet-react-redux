import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src='https://www.onlinecasino.eu/wp-content/uploads/zet-logo-150x150.png'
        alt=''
      />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
