import React from 'react';
// import './profile.css';
import PropTypes from 'prop-types';

const Statistics = ({ label, data }) => {
  return (
    <>
      <h2>Task #02 - Upload Statistics<span className="subheader"> | using module CSS</span></h2>
    </>
  );
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,  
};

export default Statistics;