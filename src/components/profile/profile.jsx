import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <h2>
        Task #01 - User Profile
        <span className="subheader"> | using Vanilla CSS</span>
      </h2>
      <div className="profile__card">
        <div className="profile__description">
          <img src={avatar} alt="user avatar" className="profile__avatar" />
          <p className="profile__name">{username}</p>
          <p className="profile__tag">@{tag}</p>
          <p className="profile__location">{location}</p>
        </div>
        <ul className="profile__stats">
          <li className="stats__element">
            <span className="stats__label">Followers</span>
            <span className="stats__quantity">{stats.followers}</span>
          </li>
          <li className="stats__element">
            <span className="stats__label">Views</span>
            <span className="stats__quantity">{stats.views}</span>
          </li>
          <li className="stats__element">
            <span className="stats__label">Likes</span>
            <span className="stats__quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
