import React from 'react';
import PropTypes from 'react';
import './TeslaWheels.css';

const LabelLists = (props) => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.handleChangeWheels;
  const sizes = [19, 21];

  const LabelItems = sizes.map(size => {
    const wheelsItem = value === size ? 'tesla-wheels-item--active' : '';
    return(
      <label key={size} className={`tesla-wheels-item tesla-wheels-item--${size} ${wheelsItem}`}>
        <input
          type="radio"
          name="wheelsize"
          value={size}
          checked={value === size}
          onChange={() => changeHandler(size)}
        />
        <p>{size}</p>
      </label>
    );
  });

  return(
    <div>
      {LabelItems}
    </div>
  );
};

const TeslaWheels = (props) => {
  return(
    <div className="tesla-wheels-component">
      <p className="tesla-wheels-title">Wheels</p>
      <div className="tesla-wheels-container cf">
        <LabelLists wheels={props}/>
      </div>
    </div>
  );
};

TeslaWheels.propTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
};

export default TeslaWheels;
