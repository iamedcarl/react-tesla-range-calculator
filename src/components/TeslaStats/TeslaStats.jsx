import React from 'react';
import PropTypes from 'prop-types';
import './TeslaStats.css';

const TeslaStats = (props) => {
  const stats = props.carstats.map((stat) => {
    return(
      <li key={stat.model}>
        <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
        <p>{stat.miles}</p>
      </li>
    );
  });

  return(
    <div className="tesla-stats">
      <ul>
        {stats}
      </ul>
    </div>
  );
};

TeslaStats.propTypes = {
  carstats: PropTypes.array,
};

export default TeslaStats;
