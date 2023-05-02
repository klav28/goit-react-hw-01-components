import React from 'react';
// import Wrapper from './friendlist.component';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section>
      <h2>
        Task #04 - Transaction History
        <span className="subheader"> | using Emotion/CSS</span>
      </h2>
      
    </section>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.object.isRequired,
};
