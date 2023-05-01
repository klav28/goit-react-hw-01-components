import React from 'react';
// import './profile.css';
import PropTypes from 'prop-types';

const FriendList = ({ label, data }) => {
  return (
    <>
      <h2>Task #03 - Friend List<span className="subheader"> | using Styled Components</span></h2>
    </>
  );
};

FriendList.propTypes = {
     list: PropTypes.object.isRequired,  
 };

export default FriendList;
