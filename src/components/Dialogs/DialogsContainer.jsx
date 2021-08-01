import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  /* const {
    state: { dialogs, messages, newMessage },
  } = props;*/
  // const { dialogs, messages } = props.state;
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageActionCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
