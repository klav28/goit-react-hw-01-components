import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <h2>Task #01 - User Profile<span className="subheader"> | using Vanilla CSS</span></h2>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="user avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className="stats">
          <li className="stats__element">
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className="stats__element">
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className="stats__element">
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;

// <div className="profile">
//   <div className="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       className="avatar"
//     />
//     <p className="name">Petra Marica</p>
//     <p className="tag">@pmarica</p>
//     <p className="location">Salvador, Brasil</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">1000</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">2000</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">3000</span>
//     </li>
//   </ul>
// </div>
