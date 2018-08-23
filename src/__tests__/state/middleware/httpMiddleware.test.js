import configureStore from 'redux-mock-store';
import middleware from '../../../state/middleware';

const mockStore = configureStore(middleware);

describe('httpMiddleware', () => {
  it('Should re-dispatch an action when the action fails, resulting in a rejected and then fulfilled action', async () => {
    const response = jest.fn();

    // The response will first fail and then succeed.
    response
      .mockReturnValueOnce(Promise.reject())
      .mockReturnValueOnce(Promise.resolve());

    const initialState = {};
    const store = mockStore(initialState);

    const action = {
      type: 'ACTION',
      meta: {
        isHttp: true,
      },
      payload: response,
    };

    await store.dispatch(action);

    const actions = store.getActions();
    const actionTypes = actions.map(action => action.type);

    expect(actionTypes).toEqual([
      'ACTION_PENDING',
      'ACTION_REJECTED',
      'ACTION_PENDING',
      'ACTION_FULFILLED',
    ]);
  });
});
