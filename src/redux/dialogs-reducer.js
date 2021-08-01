let initialState = {
  dialogs: [
    {
      name: 'Димыч',
      id: 1,
      avatar:
        'https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg',
    },
    {
      name: 'Сокол',
      id: 2,
      avatar:
        'https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg',
    },
    {
      name: 'Антон',
      id: 3,
      avatar:
        'https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg',
    },
    {
      name: 'Света',
      id: 4,
      avatar:
        'https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg',
    },
    {
      name: 'Саша',
      id: 5,
      avatar:
        'https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg',
    },
  ],
  messages: [
    {
      message: 'Hi how are you',
      id: 1,
    },
    { message: 'Dude dude', id: 2 },
  ],
  newMessage: '',
};

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessage;
      return {
        ...state,
        messages: [...state.messages, { message: body, id: 6 }],
        newMessage: '',
      };
    }

    case UPDATE_NEW_MESSAGE: {
      return {
        ...state,
        newMessage: action.text,
      };
    }

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
