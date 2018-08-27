import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { App } from '../../components/App';
import Loader from '../../components/Loader';
import Empty from '../../components/Empty';
import AppWrapper from '../../components/AppWrapper';
import AppTitle from '../../components/AppTitle';
import FilterSelect from '../../components/FilterSelect';
import FilterButton from '../../components/FilterButton';
import Drones from '../../components/Drones';
import droneFactory from '../factories/droneFactory';

let props;

describe('App', () => {
  beforeEach(() => {
    props = {
      drones: [],
      isLoading: false,
      fetchAllDrones: jest.fn(),
    };
  });

  it('Renders a Loader while fetching the data', () => {
    props.isLoading = true;
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find(Loader)).toExist();
  });

  it('Renders Empty component when there are not Drones available', async () => {
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find(AppWrapper)).toExist();
    expect(wrapper.find(AppTitle)).toExist();
    expect(wrapper.find(Empty)).toExist();
    expect(wrapper.find(FilterSelect)).toExist();
    expect(wrapper.find(FilterButton)).toExist();
  });

  it('Renders all the Drones component when there are Drones available', async () => {
    props.drones = [droneFactory.create()];
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find(AppWrapper)).toExist();
    expect(wrapper.find(AppTitle)).toExist();
    expect(wrapper.find(Drones)).toExist();
    expect(wrapper.find(FilterSelect)).toExist();
    expect(wrapper.find(FilterButton)).toExist();
  });
});
