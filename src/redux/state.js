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
      newMessage: 'test',
    },
  },
  rerenderEntireTree() {
    console.log('state');
  },
  addPost() {
    // debugger;
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
  },
  addMessage() {
    // debugger;
    let newMessage = {
      id: 5,
      message: state.dialogsPage.newMessage,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
  },
  updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  updateNewPostMessage(newText) {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer; // Паттерн наблюдатель
  },
};

export const addPost = () => {
  // debugger;
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const addMessage = () => {
  // debugger;
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessage,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export const updateNewPostMessage = (newText) => {
  state.dialogsPage.newMessage = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // Паттерн наблюдатель
};
export default state;
window.state = state;
// STORE - OOP
