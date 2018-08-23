const maxAttempts = 5;
const attempts = {};

/**
 * Whether the action is an HTTP request.
 *
 * @param {Object} action
 * @returns {Boolean}
 */
const isHttpRequest = action => action.meta && action.meta.isHttp;

/**
 * Returns a sanitised action, so the action no longer passes though this HTTP middleware.
 *
 * @param {Object} action
 * @return {{meta: {debounce: null}}}
 */
const sanitisedAction = action => ({
  ...action,
  meta: null,
});

/**
 * Http Middleware.
 *
 * @param store
 * @returns {function(*): Function}
 */
export default store => next => (action) => {
  if (isHttpRequest(action)) {
    return next(sanitisedAction(action))
      .then(() => {
        // Reset attempts
        attempts[action.type] = 0;
      })
      .catch(() => {
        // Increment attempts
        attempts[action.type] = attempts[action.type] ? attempts[action.type] + 1 : 1;

        if (attempts[action.type] <= maxAttempts) {
          store.dispatch(action);
        }
      });
  }

  return next(action);
};
