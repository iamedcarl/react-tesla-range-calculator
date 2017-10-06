import React from 'react';
import PropTypes from 'prop-types';
import './TeslaClimate.css';

const TeslaClimate = (props) => {
  const climateItem = props.value ? 'tesla-climate-item--active' : '';
  const climateHeat = !props.limit ? 'tesla-heat':'';
  return(
    <div className="tesla-climate">
      <label className={`tesla-climate-item ${climateItem}  ${climateHeat}`}>
        <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
        <i className="tesla-climate-icon"></i>
        <input
          type="checkbox"
          name="climate"
          checked={props.value}
          onChange={() => { props.handleChangeClimate(); }}
        />
      </label>
    </div>
  );
};

TeslaClimate.propTypes ={
  value: PropTypes.bool,
  limit: PropTypes.bool,
  handleChangeClimate: PropTypes.func,
};

export default TeslaClimate;
