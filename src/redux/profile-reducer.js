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
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };

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
