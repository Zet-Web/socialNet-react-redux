import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const {
    state: { dialogs, messages, newMessage },
  } = props;
  // const { dialogs, messages } = props.state;

  const dialogElements = dialogs.map((key) => {
    const { id, name, avatar } = key;
    // return <DialogItem key={key.id} id={key.id} name={key.name} />;
    return <DialogItem key={id} id={id} name={name} avatar={avatar} />;
  });

  const messageElements = messages.map((key) => {
    return <Message key={key.id} message={key.message} />;
  });

  let newPostMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  let onChangeTextarea = () => {
    let text = newPostMessage.current.value;
    props.updateNewPostMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <textarea
          name=''
          id=''
          cols='30'
          rows='5'
          value={newMessage}
          ref={newPostMessage}
          onChange={onChangeTextarea}
        />
        <div>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
