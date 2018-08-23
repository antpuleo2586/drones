import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../styles/App.css';
import { getAllDrones } from '../state/selectors/drones';
import { fetchAllDrones } from '../state/actions/drones';
import Drone from '../models/Drone';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllDrones();
  }

  render() {
    const {
      drones,
    } = this.props;

    if (drones.length === 0) {
      return null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  drones: PropTypes.arrayOf(Drone).isRequired,
  fetchAllDrones: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  drones: getAllDrones(state),
});

const mapDispatchToState = {
  fetchAllDrones,
};

export default connect(mapStateToProps, mapDispatchToState)(App);
