import store from '../../../state/store';
import * as selectors from '../../../state/selectors/drones';

describe('Selecting all drones', () => {
  it('Should return an empty array of drones from the initial state', () => {
    const state = store.getState();

    expect(selectors.getAllDrones(state)).toEqual([]);
  });

  it('Should return an empty drone from the initial state', () => {
    const state = store.getState();

    expect(selectors.getSelectedDrone(state)).toEqual(null);
  });
});
