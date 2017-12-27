import { connect } from 'react-redux';
import TeslaStats from '../components/TeslaStats/TeslaStats';

const mapStateToProps = (state) => {
  return({
    carstats: state.carstats,
  });
};

export default connect(mapStateToProps, null)(TeslaStats);
