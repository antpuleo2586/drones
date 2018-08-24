import configureStore from 'redux-mock-store';
import middleware from '../../../state/middleware';
import * as constants from '../../../constants/api';

jest.mock('../../../constants/api');

const mockStore = configureStore(middleware);

describe('httpMiddleware', () => {
  beforeEach(() => {
    global.confirm = jest.fn(() => true);
  });

  it('Should re-dispatch an action when it fails', async () => {
    const response = jest.fn();

    // The response will first fail and then succeed.
    response
      .mockReturnValueOnce(Promise.reject())
      .mockReturnValueOnce(Promise.resolve());

    const initialState = {};
    const store = mockStore(initialState);

    const fakeAction = {
      type: 'ACTION',
      meta: {
        isHttp: true,
      },
      payload: response,
    };

    await store.dispatch(fakeAction);

    const actions = store.getActions();
    const actionTypes = actions.map(action => action.type);

    expect(actionTypes).toEqual([
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_PENDING',
      'ACTION_FULFILLED',
    ]);
  });

  it('Should ask the user to retry when the max number of attempts is reached', async () => {
    constants.MAX_ATTEMPTS = 1;
    const response = jest.fn();

    // The response will fail twice and then succeed.
    response
      .mockReturnValueOnce(Promise.reject())
      .mockReturnValueOnce(Promise.reject())
      .mockReturnValueOnce(Promise.resolve());

    const initialState = {};
    const store = mockStore(initialState);

    const fakeAction = {
      type: 'ACTION',
      meta: {
        isHttp: true,
      },
      payload: response,
    };

    await store.dispatch(fakeAction);

    const actions = store.getActions();
    const actionTypes = actions.map(action => action.type);

    expect(actionTypes).toEqual([
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_PENDING',
      'ACTION_FULFILLED',
    ]);
    expect(global.confirm).toHaveBeenCalled();
  });

  it('Should be marked as UNFULFILLED when the action fails and the user does not retry', async () => {
    constants.MAX_ATTEMPTS = 1;
    global.confirm = jest.fn(() => false);
    const response = jest.fn();

    // The response will fail twice.
    response
      .mockReturnValueOnce(Promise.reject())
      .mockReturnValueOnce(Promise.reject());

    const initialState = {};
    const store = mockStore(initialState);

    const fakeAction = {
      type: 'ACTION',
      meta: {
        isHttp: true,
      },
      payload: response,
    };

    await store.dispatch(fakeAction);

    const actions = store.getActions();
    const actionTypes = actions.map(action => action.type);

    expect(actionTypes).toEqual([
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_UNFULFILLED',
    ]);
  });

  it('Should be marked as FULFILLED when the action succeeds', async () => {
    const response = jest.fn();

    response.mockReturnValueOnce(Promise.resolve());

    const initialState = {};
    const store = mockStore(initialState);

    const fakeAction = {
      type: 'ACTION',
      meta: {
        isHttp: true,
      },
      payload: response,
    };

    await store.dispatch(fakeAction);

    const actions = store.getActions();
    const actionTypes = actions.map(action => action.type);

    expect(actionTypes).toEqual([
      'ACTION_PENDING',
      'ACTION_FULFILLED',
    ]);
  });
});
