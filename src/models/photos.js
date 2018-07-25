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

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch.photos.fetchSuccess([
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x250',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x150',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x350',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x550',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x150',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x250',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x150',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x750',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x550',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
        {
          id: '01f86733-6574-40e6-9584-b3899369df0d',
          uri: 'http://via.placeholder.com/350x150',
          title: 'test',
          createdAt: '2018-07-25T00:20:52.881Z',
        },
      ]);

      dispatch.photos.toggleLoading(false);
    }
  })
};
