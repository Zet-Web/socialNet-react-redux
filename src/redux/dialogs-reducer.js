import profileReducer from './profile-reducer';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessage;
      state.newMessage = '';
      state.messages.push({ message: body, id: 6 });
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.text;
      return state;
    default:
      return state;
  }
};
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  text: text,
});
export default dialogsReducer;
