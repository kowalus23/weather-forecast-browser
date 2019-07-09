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
    const currentTemp = Math.ceil(temps[0] - 273.15);

    return (
      <tr key={name} className="text-center border-bottom">
        <td className={'w-25 align-middle'}><h2 className={'m-0'}>{name}</h2></td>
        <td className={'w-25'}>{`${currentTemp}°C`}<Chart data={temps} color={'orange'}/></td>
        <td className={'w-25'}>{pressures[0]}<Chart data={pressures} color={'green'}/></td>
        <td className={'w-25'}>{humidities[0]}<Chart data={humidities} color={'blue'}/></td>
      </tr>
    )
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr className="text-center">
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody className="text-center">
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {weather: state.weathers}
};

export default connect(mapStateToProps, {fetchWeather})(WeatherList);