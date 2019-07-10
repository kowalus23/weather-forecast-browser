import React from 'react';
import {connect} from "react-redux";
import {fetchWeather} from '../../actions'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  componentDidMount() {
    this.props.fetchWeather('Warsaw')
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    })
  };

  render() {
    return (
      <div>
        <h3 className="text-center mt-3">5-days Weather searcher</h3>
        <form className="form-inline justify-content-center my-4" action="">
          <input
            type="text"
            placeholder="City Name"
            className="form-control w-50 text-center"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn ml-3">
          <button
            type="submit"
            className="btn btn-dark"
            onClick={this.onSubmit}
          >Search</button>
        </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {weather: state.weathers}
};

export default connect(mapStateToProps, {fetchWeather})(SearchBar);
