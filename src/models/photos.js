import axios from 'axios';

export default {
  state: {
    loading: false,
    data: [],
  },
  reducers: {
    toggleLoading(state, payload) {
      return {
        ...state,
        loading: payload,
      };
    },
    fetchSuccess(state, payload) {
      return {
        ...state,
        data: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async fetch() {
      dispatch.photos.toggleLoading(true);

      const { data: { data } } = await axios.get('http://localhost:3000/photos');

      dispatch.photos.fetchSuccess(data);

      dispatch.photos.toggleLoading(false);
    }
  })
};
