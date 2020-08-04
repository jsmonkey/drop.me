import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import hydration from './hydration';
import { ormReducer } from '../models';

export default reduceReducers(hydration, combineReducers({
  ormReducer,
}));

