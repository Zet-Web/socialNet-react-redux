import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
/*
const DialogsContainer = () => {
  /!* const {
    state: { dialogs, messages, newMessage },
  } = props;*!/
  // const { dialogs, messages } = props.state;

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageActionCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};*/

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
