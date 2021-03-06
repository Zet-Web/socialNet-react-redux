import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
// STORE - OOP
