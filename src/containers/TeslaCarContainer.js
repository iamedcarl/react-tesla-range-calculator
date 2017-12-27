import { connect } from 'react-redux';
import TeslaCar from '../components/TeslaCar/TeslaCar';

const mapStateToProps = (state) => {
  return({
    wheelsize: state.config.wheels,
  });
};

export default connect(mapStateToProps, null)(TeslaCar);
