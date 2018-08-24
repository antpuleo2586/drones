import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllDrones } from '../state/selectors/drones';
import { fetchAllDrones } from '../state/actions/drones';
import Loader from './Loader';
import Empty from './Empty';
import DroneComponent from './DroneComponent';
import Drone from '../models/Drone';
import { isLoading } from '../state/selectors/loading';
import AppTitle from './AppTitle';
import AppWrapper from './AppWrapper';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchAllDrones();
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }

    if (this.props.drones.length === 0) {
      return <Empty />;
    }

    return (
      <AppWrapper>
        <AppTitle title="Welcome to Bobs Epic Drone Shack Inc" />
        { this.props.drones.map(drone => (<DroneComponent key={drone.droneId} drone={drone} />))}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  drones: PropTypes.arrayOf(PropTypes.instanceOf(Drone)).isRequired,
  fetchAllDrones: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  drones: getAllDrones(state),
  isLoading: isLoading(state),
});

const mapDispatchToState = {
  fetchAllDrones,
};

export default connect(mapStateToProps, mapDispatchToState)(App);
