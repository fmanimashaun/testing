import React from 'react'

const Profile = (props) => {
  const { name, imageUrl, imageSize } = props.userInfo
  return (
    <>
      <h1>{name}</h1>
      <img
        src={imageUrl}
        alt={'Photo of ' + name}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: '50%',
        }}
      />
    </>
  );
};

export default Profile
