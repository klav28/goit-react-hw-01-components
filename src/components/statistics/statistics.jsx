import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    return '#' + (Math.random().toString(8) + '000000').substring(2, 8);
  };
  return (
    <section>
      <h2>
        Task #02 - Upload Statistics
        <span className="subheader"> | using module CSS</span>
      </h2>
      <div className={css.statistics}>
        {title && <h3 className={css.title}>{title}</h3>}
        <ul className={css.statlist}>
          {stats.map(el => {
            return (
              <li
                key={el.id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{el.label}</span>
                <span className={css.percentage}>{el.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Statistics;
