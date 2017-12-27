import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCounter.css';

const TeslaCounter = (props) => {
  const { initValues, currentValue, increment, decrement } = props;
  return(
    <div className="tesla-counter">
      <p className="tesla-counter-title">{initValues.title}</p>
      <div className="tesla-counter-container cf">
        <div className="tesla-counter-item">
          <p className="tesla-counter-number">
            {currentValue}
            <span>{initValues.unit}</span>
          </p>
          <div className="tesla-counter-controls">
            <button
              onClick={(e) => {
                e.preventDefault();
                increment(currentValue); }
              }
              disabled={currentValue >= initValues.max}
            >
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                decrement(currentValue); }
              }
              disabled={currentValue <= initValues.min}
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TeslaCounter.propTypes = {
  initValues: PropTypes.object,
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default TeslaCounter;
