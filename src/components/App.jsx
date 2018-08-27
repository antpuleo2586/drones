import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllDrones } from '../state/selectors/drones';
import { fetchAllDrones } from '../state/actions/drones';
import Loader from './Loader';
import Empty from './Empty';
import Drones from './Drones';
import Drone from '../models/Drone';
import { isLoading } from '../state/selectors/loading';
import AppTitle from './AppTitle';
import AppWrapper from './AppWrapper';
import FilterButton from './FilterButton';
import FilterSelect from './FilterSelect';

export class App extends PureComponent {
  componentDidMount() {
    this.props.fetchAllDrones();
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }

    return (
      <AppWrapper>
        <AppTitle title="Welcome to Bobs Epic Drone Shack Inc" />
        <FilterSelect />
        <FilterButton />
        {
          this.props.drones.length > 0
            ? (
              <Drones drones={this.props.drones} />
            )
            : (
              <Empty />
            )
          }
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
