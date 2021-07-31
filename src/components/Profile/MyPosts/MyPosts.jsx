import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  const { posts } = props;
  const postsItem = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
    // props.updateNewPostText('');
    // // props.rerenderEntireTree();
  };
  let onPostChange = () => {
    // console.log(e.target.value);
    // debugger;
    let text = newPostElement.current.value;
    // props.addPost(text);
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', text: text });
  };
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <textarea
          onChange={onPostChange}
          name=''
          id='text'
          cols='30'
          rows='5'
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsItem}</div>
    </div>
  );
};
export default MyPosts;
