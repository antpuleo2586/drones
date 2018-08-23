import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import httpMiddleware from './httpMiddleware';

export default [
  thunk,
  httpMiddleware,
  promiseMiddleware(),
];
