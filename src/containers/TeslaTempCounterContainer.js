import TeslaCounter from '../components/TeslaCounter/TeslaCounter';
import { connect } from 'react-redux';
import { temperatureUp, temperatureDown } from '../actions';
import { counterDefaultVal } from '../constants/counterDefaultVal';

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.temperature,
    initValues: counterDefaultVal.temperature
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment:(value) => dispatch(temperatureUp(value)),
    decrement:(value) => dispatch(temperatureDown(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeslaCounter);
