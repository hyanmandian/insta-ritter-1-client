import { navigate } from '@reach/router';
import axios from 'axios';

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
    async publish(values) {
      dispatch.publish.toggleLoading(true);

      await axios.post('http://localhost:3000/photos', values);

      dispatch.publish.publishSuccess();

      dispatch.publish.toggleLoading(false);

      navigate('/');
    }
  })
};
