import { init } from '@rematch/core';

import photos from './models/photos';

export default function createStore(initialState = {}) {
  const store = init({
    models: { photos },
    redux: { initialState }
  });

  return {
    store,
    dispatch: store.dispatch,
  };
};
