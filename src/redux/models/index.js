import { ORM, createReducer } from 'redux-orm';

import User from './user';

const orm = new ORM();
orm.register(User);

export const ormReducer = createReducer(orm);

