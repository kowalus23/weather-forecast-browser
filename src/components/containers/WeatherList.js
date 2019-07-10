import React from 'react';
import {connect} from "react-redux";
import {fetchWeather} from "../../actions";
import Chart from '../Chart'

class WeatherList extends React.Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name} className="text-center border-bottom">
        <td className={'w-25 align-middle'}><h2 className={'__custom m-0'}>{name}</h2></td>
        <td className={'w-25'}><Chart data={temps} color={'orange'}/></td>
        <td className={'w-25'}><Chart data={pressures} color={'green'}/></td>
        <td className={'w-25'}><Chart data={humidities} color={'blue'}/></td>
      </tr>
    )
  };

  render() {
    return (
      <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
        <tr className="text-center">
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody className="text-center">
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {weather: state.weathers}
};

export default connect(mapStateToProps,
  {fetchWeather})(WeatherList);