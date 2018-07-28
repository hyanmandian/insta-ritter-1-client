import { navigate } from '@reach/router';

import API from '../api';

export default {
  state: {
    loading: false,
  },
  reducers: {
    toggleLoading(state, payload) {
      return {
        ...state,
        loading: payload,
      };
    },
    publishSuccess(state, payload) {
      return {
        ...state,
        data: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async publish(data) {
      dispatch.publish.toggleLoading(true);

      await API.photos.store(data);

      dispatch.publish.publishSuccess();

      dispatch.publish.toggleLoading(false);

      navigate('/');
    }
  })
};
