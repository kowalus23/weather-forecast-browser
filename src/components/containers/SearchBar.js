import React from 'react';
import {connect} from "react-redux";
import {fetchWeather} from '../../actions'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      isoValue: 'pl'
    }
  }

  componentDidMount() {
    this.props.fetchWeather('Warsaw', 'pl')
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  onSelectChange = (event) => {
    this.setState({
      isoValue: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term, this.state.isoValue);
    this.setState({
      term: ''
    })
  };

  render() {
    return (
      <div>
        <h3 className="text-center mt-3">5-days Weather searcher</h3>
        <form className="form-inline justify-content-center my-4" action="">
          <select className="custom-select mr-3" onChange={this.onSelectChange}>
            <option value="pl">PL</option>
            <option value="nl">NL</option>
            <option value="fr">FR</option>
          </select>
          <input
            type="text"
            placeholder="City Name"
            className="form-control text-center"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button
            type="submit"
            className="btn btn-dark custom-button"
            onClick={this.onSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {weather: state.weathers}
};

export default connect(mapStateToProps, {fetchWeather})(SearchBar);
