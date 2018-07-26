import { init } from '@rematch/core';

import photos from './models/photos';
import publish from './models/publish';

export default function createStore(initialState = {}) {
  const store = init({
    models: { photos, publish },
    redux: { initialState }
  });

  return {
    store,
    dispatch: store.dispatch,
  };
};
