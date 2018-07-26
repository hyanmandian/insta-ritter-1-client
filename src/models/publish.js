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
    async publish() {
      dispatch.publish.toggleLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch.publish.publishSuccess();

      dispatch.publish.toggleLoading(false);
    }
  })
};
