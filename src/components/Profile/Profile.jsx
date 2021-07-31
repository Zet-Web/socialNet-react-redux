import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(props);
  const {
    profilePage: { posts, newPostText },
  } = props;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={props.addPost}
        newPostText={newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;
