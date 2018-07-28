import request from './request';

export default {
  all() {
    return request.get('/photos');
  },
  store(data) {
    return request.post('/photos', data);
  },
};
