import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://i.pinimg.com/originals/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860.jpg'
        alt=''
      />
      {props.message}

      <span> {props.likesCount} like</span>
    </div>
  );
};
export default Post;
