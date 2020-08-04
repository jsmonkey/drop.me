import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export function makeStore() {
  return createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));
};
