import React from 'react';
import './TeslaBattery.css';
import { getModelData } from '../services/BatteryService';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19,
      },
    };

    this.calculateStat = this.calculateStat.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);
  }

  calculateStat(models, value) {
    const dataModels = getModelData();
    return models.map((model) => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off']
        .speed[speed][temperature];
      return{
        model,
        miles,
      };
    });
  }

  componentDidMount() {
    this.statsUpdate();
  }

  statsUpdate() {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    this.setState =({
      carstats: this.calculateStat(carModels, this.state.config),
    });
  }

  render() {
    const { config, carstats } = this.state;
    return(
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaStats carstats={carstats} />
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
