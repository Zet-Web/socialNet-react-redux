const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you', likesCount: 5 },
        { id: 2, message: 'WTF?', likesCount: 5 },
        { id: 3, message: 'Your name?', likesCount: 5 },
        { id: 4, message: 'Hey DUDE, Where are you?', likesCount: 5 },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // Паттерн наблюдатель
  },
  _callSubscriber() {
    console.log('state');
  },
  /*
  addPost() {},
  addMessage() {
    // debugger;
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessage,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessage = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {},
  updateNewPostMessage(newText) {
    this._state.dialogsPage.newMessage = newText;
    this._callSubscriber(this._state);
  },*/
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessage;
      this._state.dialogsPage.newMessage = '';
      this._state.dialogsPage.messages.push({ message: body, id: 6 });
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessage = action.text;
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  text: text,
});
export default store;
window.store = store;
// STORE - OOP
