import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  // let path2 = '/dialogs/' + props.id;
  return (
    // <div className={s.dialog + ' ' + s.activeee}>
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeLink}>
        <img alt={props.name} src={props.avatar} className='avatar-dialog' />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
