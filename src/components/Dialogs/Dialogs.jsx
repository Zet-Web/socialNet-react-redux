import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  /* const {
    state: { dialogs, messages, newMessage },
  } = props;*/
  // const { dialogs, messages } = props.state;
  let state = props.store.getState().dialogsPage;

  const dialogElements = state.dialogs.map((key) => {
    const { id, name, avatar } = key;
    // return <DialogItem key={key.id} id={key.id} name={key.name} />;
    return <DialogItem key={id} id={id} name={name} avatar={avatar} />;
  });

  const messageElements = state.messages.map((key) => {
    return <Message key={key.id} message={key.message} />;
  });
  let newMessageBody = state.newMessage;
  // let newPostMessage = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              name=''
              id=''
              cols='30'
              rows='5'
              onChange={onNewMessageChange}
              placeholder='Enter your message'
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
