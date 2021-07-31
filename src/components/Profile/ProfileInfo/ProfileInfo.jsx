import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div className={s.banner}>
        <img
          src='https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg'
          alt=''
        />
      </div>
      <div className={s.descriptionBlock}>ava+des</div>
    </>
  );
};
export default ProfileInfo;
