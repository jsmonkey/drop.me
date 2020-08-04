import { createWrapper } from 'next-redux-wrapper';

import { makeStore } from './store';

export default createWrapper(makeStore, {debug: true});

