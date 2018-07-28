import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API || 'http://localhost:3000',
});

request.interceptors.response.use(({ data: { data }, ...response }) => ({ ...response, data }), Promise.reject);

export default request;
