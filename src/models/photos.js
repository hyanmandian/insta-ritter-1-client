import API from '../api';

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

      const { data } = await API.photos.all();

      dispatch.photos.fetchSuccess(data);

      dispatch.photos.toggleLoading(false);
    }
  })
};
