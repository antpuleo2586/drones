import moxios from 'moxios';
import store from '../../../state/store';
import * as actions from '../../../state/actions/drones';
import * as selectors from '../../../state/selectors/drones';
import droneFactory from '../../factories/droneFactory';

describe('Fetching all drones', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should fetch all drones successfully and set them in the state', async () => {
    const drones = [
      droneFactory.create(),
      droneFactory.create(),
      droneFactory.create(),
    ];
    moxios.stubRequest(/.*drones.*/, {
      status: 200,
      response: drones,
    });

    await store.dispatch(actions.fetchAllDrones());

    const state = store.getState();

    expect(selectors.getAllDrones(state)).toEqual(drones);
  });
});
