import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  // debugger;
  // console.log(props);
  /*  const {
    profilePage: { posts, newPostText },
  } = props;*/
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        /*addPost={props.addPost}
        newPostText={newPostText}
        updateNewPostText={props.updateNewPostText}*/
      />
    </div>
  );
};
export default Profile;
