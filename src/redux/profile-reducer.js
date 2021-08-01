const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
  posts: [
    { id: 1, message: 'Hi how are you', likesCount: 5 },
    { id: 2, message: 'WTF?', likesCount: 5 },
    { id: 3, message: 'Your name?', likesCount: 5 },
    { id: 4, message: 'Hey DUDE, Where are you?', likesCount: 5 },
  ],
  newPostText: 'it-kamasutra',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      // this._callSubscriber(this._state);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      // this._callSubscriber(this._state);
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});
export default profileReducer;
