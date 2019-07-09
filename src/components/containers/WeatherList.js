import React from 'react';
import {connect} from "react-redux";
import {fetchWeather} from "../../actions";

class WeatherList extends React.Component {
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
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {weather: state.weathers}
};

export default connect(mapStateToProps, {fetchWeather})(WeatherList);