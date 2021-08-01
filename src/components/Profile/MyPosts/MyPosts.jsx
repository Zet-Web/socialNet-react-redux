import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // console.log(props);
  // debugger;
  const { posts } = props;
  const postsItem = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
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
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsItem}</div>
    </div>
  );
};
export default MyPosts;
