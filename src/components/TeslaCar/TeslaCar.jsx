import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

const TeslaCar = (props) => {
  return(
    <div className="tesla-car">
      <div className="tesla-wheels">
        <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
        <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
      </div>
    </div>
  );
};

// Typechecking
TeslaCar.propTypes = {
  wheelsize: PropTypes.number,
};

export default TeslaCar;
