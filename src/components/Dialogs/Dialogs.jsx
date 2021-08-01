import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  /* const {
    state: { dialogs, messages, newMessage },
  } = props;*/
  // const { dialogs, messages } = props.state;
  let state = props.dialogsPage;

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
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
