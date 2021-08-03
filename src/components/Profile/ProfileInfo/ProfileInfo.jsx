import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <>
      <div className={s.banner}>
        <img
          src='https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg'
          alt=''
        />
      </div>
      {props.profile.lookingForAJobDescription}
      {props.profile.aboutMe}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        {props.profile.fullName} id {props.profile.userId}
      </div>
    </>
  );
};
export default ProfileInfo;
